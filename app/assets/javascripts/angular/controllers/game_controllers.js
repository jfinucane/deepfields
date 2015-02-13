'use strict';

gameControllers.controller('StareCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus',
  function($scope, $routeParams, $injector,page) {
    page($scope,4)
  }]);

gameControllers.controller('StartCtrl', ['$scope', 'pageStatus',
  function($scope, page) {
    page($scope, 1)
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