'use strict';


gameControllers.controller('questionLastStopCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus',
  function($scope, $routeParams, $injector,page) {
    page($scope,30)
  }]);

gameControllers.controller('differentCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus',
  function($scope, $routeParams, $injector,page) {
    page($scope,31)
  }]);

gameControllers.controller('congratulationsCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus',
  function($scope, $routeParams, $injector,page) {
    page($scope,32)
  }]);


