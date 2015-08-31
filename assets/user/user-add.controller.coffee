angular.module('fh.user').controller('UserAddCtrl', (
  $rootScope
  $scope
  $location
  User
  ) ->

  $scope.roles = [
    "wholesaler",
    "retailer",
    "collector",
    "fisher"
  ]
  $scope.user = new User()
  $scope.createUser = ->
    $scope.user.$save()
)