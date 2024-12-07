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

// FullPersonInfo представляет человека в семейном древе
type FullPersonInfo struct {
	ID         string   `json:"id"`
	Title      string   `json:"title"`
	Birthday   string   `json:"birthday"`
	Gender     string   `json:"gender"`
	Father     string   `json:"father"`
	Mother     string   `json:"mother"`
	Wife       []string `json:"wife"`
	Friends    []string `json:"friends"`
	Colleagues []string `json:"colleagues"`
	Familiar   []string `json:"familiar"`
	Comments   string   `json:"comments"`
}

type BasicPersonInfo struct {
	ID    string `json:"id"`
	Title string `json:"title"`
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
func (a *App) SaveToJSON(filename string, people []FullPersonInfo) error {
	// Marshal the slice of FullPersonInfo structs into JSON
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
func (a *App) LoadFromJSON() ([]FullPersonInfo, error) {
	// Read the file's content
	byteValue, err := os.ReadFile(personsFilePath)
	if err != nil {
		return nil, fmt.Errorf("failed to read file: %w", err)
	}

	// Unmarshal the JSON into a slice of FullPersonInfo structs
	var people []FullPersonInfo
	err = json.Unmarshal(byteValue, &people)
	if err != nil {
		return nil, fmt.Errorf("failed to unmarshal JSON: %w", err)
	}

	//for _, person := range people {
	//	fmt.Printf("Person: %s", person)
	//	fmt.Println()
	//}

	return people, nil
}

func (a *App) SaveUsersToJSONFile(families []FullPersonInfo) []FullPersonInfo {
	// Создаем экземпляр приложения
	filename := personsFilePath

	// Load existing data from the file
	people, err := a.LoadFromJSON()
	if err != nil {
		log.Fatalf("failed to load data: %s", err)
	}

	// Add new persons to the slice
	for _, family := range families {
		people = append(people, family)
	}

	// Save the updated data back to the file
	err = a.SaveToJSON(filename, people)
	if err != nil {
		log.Fatalf("failed to save data: %s", err)
	}

	fmt.Println("Добавлены новые пользователи")
	return families
}

func (a *App) GetAllPerson() ([]BasicPersonInfo, error) {
	people, err := a.LoadFromJSON()
	if err != nil {
		return nil, fmt.Errorf("failed to load persons: %w", err)
	}

	var persons []BasicPersonInfo
	for _, person := range people {
		persons = append(persons, BasicPersonInfo{
			ID:    person.ID,
			Title: person.Title,
		})
	}

	return persons, nil
}

type SearchResult struct {
	Persons []FullPersonInfo `json:"persons"`
	Count   int              `json:"count"`
}

func (a *App) GetPersonList(search string) (SearchResult, error) {
	people, err := a.LoadFromJSON()
	if err != nil {
		return SearchResult{}, fmt.Errorf("failed to load persons: %w", err)
	}

	var persons []FullPersonInfo
	search = strings.ToLower(search)
	for _, person := range people {
		if strings.Contains(strings.ToLower(person.Title), search) ||
			strings.Contains(strings.ToLower(person.ID), search) ||
			strings.Contains(strings.ToLower(person.Birthday), search) {
			persons = append(persons, person)
		}
	}

	if len(persons) == 0 {
		return SearchResult{
			Persons: []FullPersonInfo{},
			Count:   0,
		}, nil
	}

	return SearchResult{
		Persons: persons,
		Count:   len(persons),
	}, nil
}

func (a *App) GetPersonByIdAndTitle(id string) (BasicPersonInfo, error) {
	people, err := a.LoadFromJSON()
	if err != nil {
		return BasicPersonInfo{}, fmt.Errorf("failed to load persons: %w", err)
	}

	for _, person := range people {
		if person.ID == id {
			return BasicPersonInfo{
				ID:    person.ID,
				Title: person.Title,
			}, nil
		}
	}
	return BasicPersonInfo{}, fmt.Errorf("person with ID %s not found", id)
}

type PersonWithDetails struct {
	ID         string            `json:"id"`
	Title      string            `json:"title"`
	Birthday   string            `json:"birthday"`
	Gender     string            `json:"gender"`
	Father     BasicPersonInfo   `json:"father"`
	Mother     BasicPersonInfo   `json:"mother"`
	Wife       []BasicPersonInfo `json:"wife"`
	Friends    []BasicPersonInfo `json:"friends"`
	Colleagues []BasicPersonInfo `json:"colleagues"`
	Familiar   []BasicPersonInfo `json:"familiar"`
	Comments   string            `json:"comments"`
}

func (a *App) GetPersonByID(id string) (PersonWithDetails, error) {
	people, err := a.LoadFromJSON()
	if err != nil {
		return PersonWithDetails{}, fmt.Errorf("failed to load persons: %w", err)
	}

	var person FullPersonInfo
	for _, p := range people {
		if p.ID == id {
			person = p
			break
		}
	}

	if person.ID == "" {
		return PersonWithDetails{}, fmt.Errorf("person with ID %s not found", id)
	}

	// Инициализация массивов как пустых, если они null
	var wifeObjects []BasicPersonInfo
	if person.Wife != nil {
		for _, wifeId := range person.Wife {
			wife, err := a.GetPersonByIdAndTitle(wifeId)
			if err != nil {
				return PersonWithDetails{}, fmt.Errorf("failed to load wife data: %w", err)
			}
			wifeObjects = append(wifeObjects, wife)
		}
	}

	var friendObjects []BasicPersonInfo
	if person.Friends != nil {
		for _, friendId := range person.Friends {
			friend, err := a.GetPersonByIdAndTitle(friendId)
			if err != nil {
				return PersonWithDetails{}, fmt.Errorf("failed to load friend data: %w", err)
			}
			friendObjects = append(friendObjects, friend)
		}
	}

	var colleagueObjects []BasicPersonInfo
	if person.Colleagues != nil {
		for _, colleagueId := range person.Colleagues {
			colleague, err := a.GetPersonByIdAndTitle(colleagueId)
			if err != nil {
				return PersonWithDetails{}, fmt.Errorf("failed to load colleague data: %w", err)
			}
			colleagueObjects = append(colleagueObjects, colleague)
		}
	}

	var familiarObjects []BasicPersonInfo
	if person.Familiar != nil {
		for _, familiarId := range person.Familiar {
			familiar, err := a.GetPersonByIdAndTitle(familiarId)
			if err != nil {
				return PersonWithDetails{}, fmt.Errorf("failed to load familiar data: %w", err)
			}
			familiarObjects = append(familiarObjects, familiar)
		}
	}

	var father BasicPersonInfo
	if person.Father != "" {
		father, err = a.GetPersonByIdAndTitle(person.Father)
		if err != nil {
			return PersonWithDetails{}, fmt.Errorf("failed to load father data: %w", err)
		}
	}

	var mother BasicPersonInfo
	if person.Mother != "" {
		mother, err = a.GetPersonByIdAndTitle(person.Mother)
		if err != nil {
			return PersonWithDetails{}, fmt.Errorf("failed to load mother data: %w", err)
		}
	}

	// Заполнить поля пользователя
	personWithDetails := PersonWithDetails{
		ID:         person.ID,
		Title:      person.Title,
		Birthday:   person.Birthday,
		Gender:     person.Gender,
		Wife:       wifeObjects,
		Father:     father,
		Mother:     mother,
		Friends:    friendObjects,
		Colleagues: colleagueObjects,
		Familiar:   familiarObjects,
		Comments:   person.Comments,
	}

	return personWithDetails, nil
}

// UpdatePersonByID обновляет данные пользователя по ID
func (a *App) UpdatePersonByID(id string, updatedPerson FullPersonInfo, newPersons []FullPersonInfo) (string, error) {
	people, err := a.LoadFromJSON()
	if err != nil {
		return updatedPerson.ID, fmt.Errorf("failed to load persons: %w", err)
	}

	var found bool
	for i, person := range people {
		if person.ID == id {
			people[i] = updatedPerson
			found = true
			break
		}
	}

	if !found {
		return updatedPerson.ID, fmt.Errorf("person with ID %s not found", id)
	}

	// Добавляем новых пользователей
	people = append(people, newPersons...)

	// Сохраняем обновленные данные обратно в JSON файл
	err = a.SaveToJSON(personsFilePath, people)
	if err != nil {
		return updatedPerson.ID, fmt.Errorf("failed to save data: %w", err)
	}

	return updatedPerson.ID, nil
}
