angular.module('fh.user', ['ui.router', 'fh.userResource', 'fh.countries', 'fh.roles']).config(function($stateProvider) {
  return $stateProvider.state('users', {
    url: '/users',
    views: {
      main: {
        controller: 'UserAddCtrl',
        templateUrl: 'user/user-add.tpl.html'
      }
    }
  });
});
