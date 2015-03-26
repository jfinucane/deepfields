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
    $scope.clicksAreActive = true
    $scope.got_counts = function(){
      if (galaxyData.count_of_samples() > 0) {
      galaxyData.compute_frequencies()  //Memoize frequencies to avoid $digest loop
      //TODOFIX TESTING ONLY
      location.path('/fields/evaluate')
    }
    }
  }]);
gameControllers.controller('gotCountsCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus','galaxyData',
  function($scope, $routeParams, $injector,page, galaxyData) {
    page($scope,7)
    $scope.clicksAreActive = false
    galaxyData.redraw_galaxies()
    $scope.galaxyData = galaxyData
  }]);
gameControllers.controller('irregularCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus', 'galaxyData',
  function($scope, $routeParams, $injector,page, galaxyData) {
    $scope.galaxyData = galaxyData
    page($scope,8)
    $scope.show_me_result=false;
  }]);
gameControllers.controller('nextCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus',
  function($scope, $routeParams, $injector,page) {
    page($scope,9)
  }]);
