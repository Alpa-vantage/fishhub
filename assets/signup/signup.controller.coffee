angular.module('fh.signup').controller('SignupCtrl', (
  $rootScope
  $scope
  $location
  ) ->

  $scope.roles = [
    "wholesaler",
    "retailer",
    "collector",
    "fisher"
  ]
)