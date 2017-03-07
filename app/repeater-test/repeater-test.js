angular.module('myApp.repeater-test', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/repeater-test', {
    templateUrl: 'repeater-test/repeater-test.html',
    controller: 'RepeaterTestCtrl'
  });
}])

.control('RepeaterTestCtrl', function($scope) {
    
});