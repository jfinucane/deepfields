'use strict';


gameControllers.controller('indexSampleCtrl', ['$scope', 'pageStatus',
  function($scope, page) {
    page($scope,14)
  }]);

gameControllers.controller('goCtrl', ['$scope', 'pageStatus', 'sampleDraw',
  function($scope,  page, draw) {
    var sample_mean_checked = false
    var sample_median_checked = false
    var ctx=document.getElementById("variability").getContext("2d");
    var sample_frequencies = draw.sample_draw(ctx)
    $scope.show_min_max_plot = false
    $scope.show_plot = function() {
      $scope.show_min_max_plot = true
    }
    $scope.median_checked = function() {
      sample_median_checked = true
      sample_mean_checked = false
      draw.red_diamond(ctx, sample_frequencies[2],102, 7)
    }
    $scope.mean_checked = function() {
      sample_mean_checked = true
      sample_median_checked = false
      var sum = 0
      for(i=0; i<5; i++){sum += sample_frequencies[i]}
      draw.green_circle(ctx, Math.floor(sum/5), 105,9)
    }
    $scope.recalculate = function() {
      sample_frequencies = draw.sample_draw(ctx)
      sample_mean_checked = false
      sample_median_checked = false
    }
    $scope.mean = function() {return sample_mean_checked}
    $scope.median = function() {return sample_median_checked}
    page($scope,15)
  }]);

gameControllers.controller('magnifyCtrl', ['$scope',  'pageStatus',
  function($scope, page) {
    page($scope,16)
  }]);

gameControllers.controller('smallestCtrl', ['$scope', 'pageStatus',
  function($scope, page) {
    page($scope,17)
  }]);

gameControllers.controller('bestRegionCtrl', ['$scope', 'pageStatus',
  function($scope, page) {
    page($scope,18)
  }]);

gameControllers.controller('youGotItCtrl', ['$scope', 'pageStatus',
  function($scope, page) {
    page($scope,19)
  }]);

gameControllers.controller('compareAstronomerCtrl', ['$scope', 'pageStatus',
  function($scope, page) {
    page($scope,20)
  }]);

gameControllers.controller('youVersusrCtrl', ['$scope', 'pageStatus',
  function($scope, page) {
    page($scope,21)
  }]);
