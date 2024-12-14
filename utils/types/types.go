// types.go
package types

// FullPersonInfo представляет человека в семейном древе
type FullPersonInfo struct {
	ID         string   `json:"id"`
	Title      string   `json:"title"`
	Birthday   string   `json:"birthday"`
	Gender     string   `json:"gender"`
	Father     string   `json:"father"`
	Mother     string   `json:"mother"`
	Spouse     []string `json:"spouse"`
	Friends    []string `json:"friends"`
	Colleagues []string `json:"colleagues"`
	Familiar   []string `json:"familiar"`
	Comments   string   `json:"comments"`
}
