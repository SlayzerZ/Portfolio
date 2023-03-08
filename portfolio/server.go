package portfolio

import (
	"fmt"
	"log"
	"net/http"
	"text/template"
)

type Profiler struct {
	FirstName    string
	LastName     string
	Birthdate    string
	EtablishName string
	Email        string
	Cellphone    string
}

func Profil(w http.ResponseWriter, r *http.Request, p *Profiler) {
	p.FirstName = Read("./portfolio/user.txt", 0)
	p.LastName = Read("./portfolio/user.txt", 1)
	p.Birthdate = Read("./portfolio/user.txt", 2)
	p.EtablishName = Read("./portfolio/user.txt", 3)
	p.Email = Read("./portfolio/user.txt", 4)
	p.Cellphone = Read("./portfolio/user.txt", 5)
	template, err := template.ParseFiles("templates/profil.html")
	if err != nil {
		log.Fatal(err)
	}
	template.Execute(w, p)
}

func errorPage(w http.ResponseWriter, r *http.Request) {
	template, err := template.ParseFiles("templates/errorConnection.html")
	if err != nil {
		log.Fatal(err)
	}
	template.Execute(w, r)
}

func Index(w http.ResponseWriter, r *http.Request) {
	template, err := template.ParseFiles("templates/index.html")
	if err != nil {
		log.Fatal(err)
	}
	template.Execute(w, r)
}

func Execute() {
	datap := Profiler{"", "", "", "", "", ""}
	fmt.Println("http://localhost:8080/")

	http.HandleFunc("/", func(rw http.ResponseWriter, r *http.Request) {
		Index(rw, r)
	})
	http.HandleFunc("/profil", func(rw http.ResponseWriter, r *http.Request) {
		Profil(rw, r, &datap)
	})
	http.HandleFunc("/error", func(rw http.ResponseWriter, r *http.Request) {
		errorPage(rw, r)
	})

	fs := http.FileServer(http.Dir("./static/"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))
	fi := http.FileServer(http.Dir("./assets/"))
	http.Handle("/assets/", http.StripPrefix("/assets/", fi))
	http.ListenAndServe(":8080", nil)
}
