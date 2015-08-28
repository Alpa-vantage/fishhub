package signup

import (
	"github.com/martini-contrib/binding"
)

type signupForm struct {
  Name string `form:"name"` binding:"required"
  Email string `form:"email"` binding:"required"
  Role string `form:"role"` binding:"required"
  Country `form:"email"` binding:"required"
  Address `form:"email"`
  ContactNo `form:"email"`
  Notification `form:"email"`
}
