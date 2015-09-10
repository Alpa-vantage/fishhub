angular.module('fh.user').controller('UserAddCtrl', function($rootScope, $scope, $location, User, countries, roles, $mdDialog) {
  var errorCtrl, successSignupCtrl;
  $scope.user = new User();
  $scope.countries = countries;
  $scope.roles = roles;
  $scope.loading = false;
  successSignupCtrl = function($scope, $mdDialog) {
    return $scope.hide = function() {
      $mdDialog.hide();
      return $location.path("login");
    };
  };
  errorCtrl = function($scope, $mdDialog, errors) {
    $scope.errors = errors;
    return $scope.hide = function() {
      return $mdDialog.hide();
    };
  };
  $scope.showSignupSuccess = function() {
    return $mdDialog.show({
      controller: successSignupCtrl,
      templateUrl: 'signupSuccess.tmpl.html',
      parent: angular.element(document.querySelector('#userContainer')),
      clickOutsideToClose: true
    });
  };
  $scope.showSignupErrors = function(errors) {
    return $mdDialog.show({
      controller: errorCtrl,
      templateUrl: 'signupErrors.tmpl.html',
      parent: angular.element(document.querySelector('#userContainer')),
      locals: {
        errors: $scope.errors
      },
      clickOutsideToClose: true
    });
  };
  return $scope.createUser = function() {
    $scope.loading = true;
    return $scope.user.$save((function(resp, headers) {
      $scope.loading = false;
      return $scope.showSignupSuccess();
    }), function(err) {
      $scope.errors = err.data;
      $scope.showSignupErrors();
      return $scope.loading = false;
    });
  };
});
