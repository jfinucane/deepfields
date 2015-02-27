'use strict';


gameControllers.controller('banishingCtrl', ['$scope', 'pageStatus',
  function($scope, page) {
    page($scope,11)
  }]);

gameControllers.controller('compareCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus',
  function($scope, $routeParams, $injector,page) {
    page($scope,12)
  }]);
