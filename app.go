package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"strings"
)

// App struct
type App struct {
	ctx context.Context
}

// Person представляет человека в семейном древе
type Person struct {
	ID         string   `json:"id"`
	Fio        string   `json:"fio"`
	Birthday   string   `json:"birthday"`
	Father     string   `json:"father"`
	Mother     string   `json:"mother"`
	Wife       []string `json:"wife"`
	Friends    []string `json:"friends"`
	Colleagues []string `json:"colleagues"`
	Familiar   []string `json:"familiar"`
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
func (a *App) LoadFromJSON() ([]Person, error) {
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

func (a *App) SaveUsersToJSONFile(families []Person) []Person {
	// Создаем экземпляр приложения
	app := NewApp()
	filename := personsFilePath

	// Load existing data from the file
	people, err := app.LoadFromJSON()
	if err != nil {
		log.Fatalf("failed to load data: %s", err)
	}

	// Add new persons to the slice
	for _, family := range families {
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
	}

	// Save the updated data back to the file
	err = app.SaveToJSON(filename, people)
	if err != nil {
		log.Fatalf("failed to save data: %s", err)
	}

	fmt.Println("Добавлены новые пользователи")
	return families
}

type PersonId struct {
	ID  string `json:"id"`
	Fio string `json:"fio"`
}

func (a *App) GetAllPerson() ([]PersonId, error) {
	people, err := a.LoadFromJSON()
	if err != nil {
		return nil, fmt.Errorf("failed to load persons: %w", err)
	}

	var persons []PersonId
	for _, person := range people {
		persons = append(persons, PersonId{
			ID:  person.ID,
			Fio: person.Fio,
		})
	}

	return persons, nil
}

type SearchResult struct {
	Persons []Person `json:"persons"`
	Count   int      `json:"count"`
}

func (a *App) GetPersonList(search string) (SearchResult, error) {
	people, err := a.LoadFromJSON()
	if err != nil {
		return SearchResult{}, fmt.Errorf("failed to load persons: %w", err)
	}

	var persons []Person
	search = strings.ToLower(search)
	for _, person := range people {
		if strings.Contains(strings.ToLower(person.Fio), search) ||
			strings.Contains(strings.ToLower(person.ID), search) ||
			strings.Contains(strings.ToLower(person.Birthday), search) {
			persons = append(persons, Person{
				ID:         person.ID,
				Fio:        person.Fio,
				Birthday:   person.Birthday,
				Wife:       person.Wife,
				Father:     person.Father,
				Mother:     person.Mother,
				Friends:    person.Friends,
				Colleagues: person.Colleagues,
				Familiar:   person.Familiar,
			})
		}
	}

	if len(persons) == 0 {
		return SearchResult{
			Persons: []Person{},
			Count:   0,
		}, nil
	}

	return SearchResult{
		Persons: persons,
		Count:   len(persons),
	}, nil
}

//func main() {
//	app := NewApp()
//	search := "иван"
//	people, err := app.GetPersonList(search)
//	if err != nil {
//		log.Fatalf("failed to get person list: %s", err)
//	}
//
//	for _, person := range people {
//		fmt.Printf("Found person: %s\n", person.Fio)
//	}
//}
