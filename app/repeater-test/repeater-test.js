angular.module('myApp.repeater-test', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/repeater-test', {
      templateUrl: 'repeater-test/repeater-test.html',
      controller: 'RepeaterTestCtrl'
    });
  }])

  .controller('RepeaterTestCtrl', function ($scope) {
    $scope.records = [
      "Alfreds Futterkiste",
      "Berglunds snabbköp",
      "Centro comercial Moctezuma",
      "Ernst Handel",
    ];

    $scope.colors = [
      {
        color: "red",
        value: "#f00"
      },
      {
        color: "green",
        value: "#0f0"
      },
      {
        color: "blue",
        value: "#00f"
      },
      {
        color: "cyan",
        value: "#0ff"
      },
      {
        color: "magenta",
        value: "#f0f"
      },
      {
        color: "yellow",
        value: "#ff0"
      },
      {
        color: "black",
        value: "#000"
      }
    ]
});