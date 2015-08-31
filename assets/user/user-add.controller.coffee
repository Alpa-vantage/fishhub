angular.module('fh.user').controller('UserAddCtrl', (
  $rootScope
  $scope
  $location
  User
  countries
  roles
  ) ->

  $scope.user = new User()
  $scope.countries = countries
  $scope.roles = roles
  $scope.createUser = ->
    console.log($scope.countries)
    $scope.user.$save()
)