angular.module('fh.user').controller('UserAddCtrl', function($rootScope, $scope, $location, User, countries, roles, $mdDialog) {
  var errorController;
  $scope.user = new User();
  $scope.countries = countries;
  $scope.roles = roles;
  $scope.loading = false;
  $scope.errors = {};
  errorController = function($scope, $mdDialog, errors) {
    $scope.errors = errors;
    return $scope.hide = function() {
      return $mdDialog.hide();
    };
  };
  $scope.showSignupErrors = function(errors) {
    return $mdDialog.show({
      controller: errorController,
      templateUrl: 'signupErrors.tmpl.html',
      parent: angular.element(document.querySelector('#userContainer')),
      locals: {
        errors: $scope.errors
      },
      clickOutsideToClose: true
    });
  };
  return $scope.createUser = function() {
    console.log($scope.countries);
    $scope.loading = true;
    return $scope.user.$save((function(resp, headers) {
      return $scope.loading = false;
    }), function(err) {
      $scope.errors = err.data;
      $scope.showSignupErrors();
      return $scope.loading = false;
    });
  };
});
