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