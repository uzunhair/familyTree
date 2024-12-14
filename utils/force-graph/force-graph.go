package force_graph

import "wails/utils/types"

// NodesPersonInfo
type NodesPersonInfo struct {
	ID         string   `json:"id"`
	Name       string   `json:"name"`
	Gender     string   `json:"gender"`
	Father     string   `json:"father"`
	Mother     string   `json:"mother"`
	Spouse     []string `json:"spouse"`
	Friends    []string `json:"friends"`
	Colleagues []string `json:"colleagues"`
	Familiar   []string `json:"familiar"`
}

func GetNodes(people []types.FullPersonInfo) []NodesPersonInfo {
	var nodes []NodesPersonInfo
	for _, person := range people {
		nodes = append(nodes, NodesPersonInfo{
			ID:         person.ID,
			Name:       person.Title,
			Gender:     person.Gender,
			Father:     person.Father,
			Mother:     person.Mother,
			Spouse:     person.Spouse,
			Friends:    person.Friends,
			Colleagues: person.Colleagues,
			Familiar:   person.Familiar,
		})
	}

	return nodes
}
