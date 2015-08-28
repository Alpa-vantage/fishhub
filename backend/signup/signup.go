package signup

import (
	"github.com/martini-contrib/binding"
)

type SignupForm struct {
  Name string `form:"name"` binding:"required"
  Email string `form:"email"` binding:"required"
  Role string `form:"role"` binding:"required"
  Country `form:"country"` binding:"required"
  Address `form:"address"`
  ContactNo `form:"contactno"`
  Notification `form:"notification"`
}

func (signupForm SignupForm) Validate(errors binding.Errors, req *http.Request) binding.Errors {

    v := NewValidation(&errors, signupForm)

    // //run some validators
    v.Validate(&signupForm.Name).Key("name").MaxLength(200)
    v.Validate(&signupForm.Email).Default("Custom Email Validation Message").Classify("email-class").Email()
    v.Validate(&signupForm.Comments).TrimSpace().MinLength(10)

    return *v.Errors.(*binding.Errors)
}
