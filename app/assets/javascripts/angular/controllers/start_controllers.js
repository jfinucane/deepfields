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

gameControllers.controller('selectCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus', 'galaxyData', '$location', 
  function($scope, $routeParams, $injector,page, galaxyData, location) {
    page($scope,6)
    galaxyData.reset_the_counts()
    $scope.galaxyData = galaxyData
    $scope.got_counts = function(){
      galaxyData.compute_frequencies()
      location.path('/start/got_counts')
    }
  }]);

gameControllers.controller('gotCountsCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus','galaxyData',
  function($scope, $routeParams, $injector,page, galaxyData) {
    page($scope,7)
    galaxyData.redraw_galaxies
    $scope.galaxyData = galaxyData

  }]);

gameControllers.controller('IrregularsCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus',
  function($scope, $routeParams, $injector,page) {
    page($scope,8)
  }]);

gameControllers.controller('nextCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus',
  function($scope, $routeParams, $injector,page) {
    page($scope,9)
  }]);
