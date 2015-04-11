'use strict';
gameControllers.controller('outbackCtrl', ['$scope', 'pageStatus',
  function($scope, page) {
    page($scope,3)
  }]);
gameControllers.controller('stareCtrl', ['$scope', 'pageStatus',
  function($scope, page) {
    page($scope,4)
  }]);
gameControllers.controller('classicCtrl', ['$scope', 'pageStatus', 'gameProgress', 'modalService',
  function($scope, page, gameProgress, modal) {
    page($scope,5)
    var get_count_path = gameProgress.get_location_needs_sample()
    console.log("here", get_count_path, 'x')
    if (get_count_path != '') {
      modal.open('you_must_first_pick')
    }
  }]);

gameControllers.controller('selectCtrl', ['$scope', 'pageStatus', 'galaxyData', '$location',
  function($scope, page, galaxyData, location, gameProgress) {
    page($scope,6)   
    galaxyData.reset_the_counts()
    $scope.galaxyData = galaxyData
    $scope.clicksAreActive = true
    $scope.got_counts = function(){
      if (galaxyData.count_of_samples() > 0) {
        galaxyData.compute_frequencies()  //Memoize frequencies to avoid $digest loop
        location.path('/start/got_counts')
      }
    }
  }]);
gameControllers.controller('gotCountsCtrl', ['$scope', 'pageStatus','galaxyData',  'gameProgress', '$location',
  function($scope, page, galaxyData, gameProgress, location) {
    page($scope,7)
    $scope.clicksAreActive = false
    galaxyData.redraw_galaxies()
    $scope.galaxyData = galaxyData
    $scope.move_forward = function() {
      var go_back = gameProgress.get_location_needs_sample()
      if (go_back=='') {
        location.path('/start/next')
      }
      else {
        gameProgress.set_location_needs_sample('')
        location.path(go_back)
      }
    }
  }]);
gameControllers.controller('irregularCtrl', ['$scope', 'pageStatus', 'galaxyData', 'sampleTypeFrequency',
  function($scope, page, galaxyData, sampleTypeFrequency, gameProgress) {
    $scope.galaxyData = galaxyData
    page($scope,8)
    $scope.show_me_result=false;
    $scope.astronomer_irregular_frequency = sampleTypeFrequency.ASTRONOMER(2)
  }]);
gameControllers.controller('nextCtrl', ['$scope', 'pageStatus',
  function($scope, page) {
    page($scope,9)
  }]);
