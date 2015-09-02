package main

import (
	"github.com/alpa-vantage/fishhub/backend/config"
	"github.com/alpa-vantage/fishhub/backend/fishhub"
	"github.com/alpa-vantage/fishhub/backend/session"
	. "github.com/alpa-vantage/fishhub/backend/user"
	"github.com/go-martini/martini"
	"github.com/martini-contrib/binding"
	"github.com/martini-contrib/render"
	"log"
	"net/http"
)

func home(r render.Render) {
	r.HTML(200, "index", "jeremy")
}

func main() {

	config, err := config.Load()
	if err != nil {
		log.Fatal(err)
	}

	fishhubService, err := fishhub.NewService(config.MongoURL)
	if err != nil {
		log.Fatal(err)
	}

	sessionService, err := session.NewService(config.MongoURL)
	if err != nil {
		log.Fatal(err)
	}

	m := martini.Classic()

	m.Map(fishhubService)
	m.Map(sessionService)

	// Setup routes
	m.Get("/", home)

	m.Group("/users", func(r martini.Router) {
		r.Post("", binding.Bind(UserForm{}), NewUser)
		r.Get("/:id", GetUser)
		r.Put("/update/:id", UpdateUser)
		r.Delete("/delete/:id", DeleteUser)
	})

	m.Handlers(
		render.Renderer(render.Options{
			Delims: render.Delims{"<%", "%>"},
		}),
		martini.Static("public"),
	)

	m.NotFound(func(r render.Render) {
		r.HTML(404, "404", nil)
	})

	err = http.ListenAndServe(":3000", m)
	if err != nil {
		log.Fatal(err)
	}
}
