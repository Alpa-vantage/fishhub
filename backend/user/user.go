package user

import (
	"github.com/jamieomatthews/validation"
	"github.com/martini-contrib/binding"
	"github.com/martini-contrib/render"
	"net/http"
)

type UserForm struct {
	Name            string `form:"name" binding:"required"`
	Email           string `form:"email" binding:"required"`
	Role            string `form:"role" binding:"required"`
	Country         string `form:"country" binding:"required"`
	Address         string `form:"address"`
	ContactNo       string `form:"contactno"`
	Notification    string `form:"notification"`
	Password        string `form:"password"`
	ConfirmPassword string `form:"confirm_password"`
}

func (userForm UserForm) Validate(errors binding.Errors, req *http.Request) binding.Errors {
	v := validation.NewValidation(&errors, userForm)
	// //run some validators
	v.Validate(&userForm.Name).Key("name").MaxLength(200)
	v.Validate(&userForm.Email).Classify("email-class").Email()

	return *v.Errors.(*binding.Errors)
}

func NewUser(r render.Render, re *http.Request) {

}

func UpdateUser(r render.Render, re *http.Request) {

}

func DeleteUser(r render.Render, re *http.Request) {

}

func GetUser(r render.Render, re *http.Request) {

}
