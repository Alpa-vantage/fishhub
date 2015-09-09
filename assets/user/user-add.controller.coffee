angular.module('fh.user').controller('UserAddCtrl', (
  $rootScope
  $scope
  $location
  User
  countries
  roles
  $mdDialog
  ) ->

  $scope.user = new User()
  $scope.countries = countries
  $scope.roles = roles
  $scope.loading=false
  $scope.errors = {}

  errorController = ($scope, $mdDialog, errors) ->
    $scope.errors = errors
    $scope.hide = ->
      $mdDialog.hide()

  $scope.showSignupErrors = (errors) ->
    $mdDialog.show(
      controller: errorController
      templateUrl: 'signupErrors.tmpl.html'
      parent: angular.element(document.querySelector('#userContainer'))
      locals: { errors: $scope.errors}
      clickOutsideToClose: true)

  $scope.createUser = ->
    console.log($scope.countries)
    $scope.loading = true
    $scope.user.$save ((resp, headers) ->
      $scope.loading=false
    ), (err) ->
      $scope.errors = err.data
      $scope.showSignupErrors()
      $scope.loading=false
)