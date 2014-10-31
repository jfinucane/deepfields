'use strict';

/* Controllers */

var gameControllers = angular.module('gameControllers', []);

gameControllers.controller('HomeCtrl', ['$scope', '$http',
  function($scope, $http) {
    /*$http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';  */
  }]);

gameControllers.controller('ItineraryCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    /*$scope.phoneId = $routeParams.phoneId;*/
  }]);

gameControllers.controller('StartCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    /*$scope.phoneId = $routeParams.phoneId;*/
  }]);

gameControllers.controller('BiasCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    /*$scope.phoneId = $routeParams.phoneId;*/
  }]);
gameControllers.controller('SampleCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    /*$scope.phoneId = $routeParams.phoneId;*/
  }]);
gameControllers.controller('FieldCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    /*$scope.phoneId = $routeParams.phoneId;*/
  }]);
gameControllers.controller('LastCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    /*$scope.phoneId = $routeParams.phoneId;*/
  }]);