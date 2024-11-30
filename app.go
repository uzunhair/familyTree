package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"
)

// App struct
type App struct {
	ctx context.Context
}

// Person представляет человека в семейном древе
type Person struct {
	ID         string `json:"id"`
	Fio        string `json:"fio"`
	Birthday   string `json:"birthday"`
	Wife       string `json:"wife"`
	Father     string `json:"father"`
	Mother     string `json:"mother"`
	Friends    string `json:"friends"`
	Colleagues string `json:"colleagues"`
	Familiar   string `json:"familiar"`
}

var personsFilePath = "frontend/src/data/family-users.json"

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

// SaveToJSON сохраняет семейное древо в файл JSON
func (a *App) SaveToJSON(filename string, people []Person) error {
	// Marshal the slice of Person structs into JSON
	byteValue, err := json.MarshalIndent(people, "", "  ")
	if err != nil {
		return fmt.Errorf("failed to marshal JSON: %w", err)
	}

	// Write the JSON to the file
	err = os.WriteFile(filename, byteValue, 0644)
	if err != nil {
		return fmt.Errorf("failed to write file: %w", err)
	}

	return nil
}

// LoadFromJSON загружает семейное древо из файла JSON
func (a *App) LoadFromJSON(filename string) ([]Person, error) {
	// Read the file's content
	byteValue, err := os.ReadFile(personsFilePath)
	if err != nil {
		return nil, fmt.Errorf("failed to read file: %w", err)
	}

	// Unmarshal the JSON into a slice of Person structs
	var people []Person
	err = json.Unmarshal(byteValue, &people)
	if err != nil {
		return nil, fmt.Errorf("failed to unmarshal JSON: %w", err)
	}

	for _, person := range people {
		fmt.Printf("Person: %s", person)
		fmt.Println()
	}

	return people, nil
}

func (a *App) SaveUserToJSONFile(family *Person) Person {
	// Создаем экземпляр приложения
	app := NewApp()
	filename := personsFilePath

	// Load existing data from the file
	people, err := app.LoadFromJSON(filename)
	if err != nil {
		log.Fatalf("failed to load data: %s", err)
	}

	// Add a new person to the slice
	newPerson := Person{
		ID:         family.ID,
		Fio:        family.Fio,
		Birthday:   family.Birthday,
		Wife:       family.Wife,
		Father:     family.Father,
		Mother:     family.Mother,
		Friends:    family.Friends,
		Colleagues: family.Colleagues,
		Familiar:   family.Familiar,
	}
	people = append(people, newPerson)

	// Save the updated data back to the file
	err = app.SaveToJSON(filename, people)
	if err != nil {
		log.Fatalf("failed to save data: %s", err)
	}

	fmt.Println("New person added successfully")
	return newPerson
}

func (a *App) GetAllPerson() ([]string, error) {
	people, err := a.LoadFromJSON(personsFilePath)
	if err != nil {
		return nil, fmt.Errorf("failed to load persons: %w", err)
	}

	var names []string
	for _, person := range people {
		names = append(names, person.Fio)
	}

	return names, nil
}
