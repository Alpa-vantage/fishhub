angular.module('fh.login').controller('LoginCtrl', function($rootScope, $scope, $location, $mdDialog, $http) {
  $scope.loading = false;
  $scope.user = {};
  return $scope.checkCredential = function() {
    return $http.post("login", $scope.user).success(function(data, status) {
      return console.log("login is successful");
    }).error(function(data, status, headers, config) {
      return console.log(data);
    });
  };
});
