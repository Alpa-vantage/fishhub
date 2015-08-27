angular.module('fh.signup', [
  'ui.router'
])

.config(($stateProvider) ->
  $stateProvider.state('signup',
    url: '/signup'
    views:
      main:
        controller: 'SignupCtrl'
        templateUrl: 'signup/signup.tpl.html'
  )
)