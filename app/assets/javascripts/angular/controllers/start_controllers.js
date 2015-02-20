'use strict';


gameControllers.controller('outbackCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus',
  function($scope, $routeParams, $injector,page) {
    page($scope,3)
  }]);

gameControllers.controller('stareCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus',
  function($scope, $routeParams, $injector,page) {
    page($scope,4)
  }]);

gameControllers.controller('classicCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus',
  function($scope, $routeParams, $injector,page) {
    page($scope,5)
  }]);

gameControllers.controller('selectCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus', 'galaxyData',
  function($scope, $routeParams, $injector,page, galaxyData) {
    page($scope,6)
    $scope.sample_this_galaxy = galaxyData.sample_this_galaxy
  }]);

gameControllers.controller('gotCountsCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus',
  function($scope, $routeParams, $injector,page) {
    page($scope,7)
  }]);

gameControllers.controller('IrregularsCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus',
  function($scope, $routeParams, $injector,page) {
    page($scope,8)
  }]);

gameControllers.controller('nextCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus',
  function($scope, $routeParams, $injector,page) {
    page($scope,9)
  }]);
