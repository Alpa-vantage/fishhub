package main

import (
	"github.com/go-martini/martini"
	"github.com/martini-contrib/render"
	"log"
	"net/http"
)

func home(r render.Render) {
	r.HTML(200, "hello", "jeremy")
}

func main() {

	m := martini.Classic()

	m.Get("/", home)
	m.Handlers(
		render.Renderer(render.Options{
			Delims: render.Delims{"<%", "%>"},
		}))

	m.NotFound(func(r render.Render) {
		r.HTML(404, "404", nil)
	})

	err := http.ListenAndServe(":3000", m)
	if err != nil {
		log.Fatal(err)
	}
}
