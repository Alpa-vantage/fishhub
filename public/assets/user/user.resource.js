angular.module('fh.userResource', ["ngResource"]).factory("User", function($resource) {
  return $resource('users/:id', {});
});
