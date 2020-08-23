 

package main

// Category Struct
type Category struct {
	ID    string `json:"id" yaml:"id"`
	URL   string `json:"url" yaml:"url"`
	Name  string `json:"name" yaml:"name"`
	Image string `json:"image" yaml:"image"`
}

// Categories Array
type Categories []Category
