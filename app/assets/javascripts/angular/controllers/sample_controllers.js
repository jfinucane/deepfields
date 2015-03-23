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
      draw.red_diamond(ctx, sample_frequencies.median_pixel,102, 7)
    }
    $scope.mean_checked = function() {
      sample_mean_checked = true
      sample_median_checked = false
      draw.green_circle(ctx, sample_frequencies.mean_pixel, 105,9)
    }
    $scope.recalculate = function() {
      sample_frequencies = draw.sample_draw(ctx)
      sample_mean_checked = false
      sample_median_checked = false
    }
    $scope.mean = function() {return sample_mean_checked}
    $scope.median = function() {return sample_median_checked}
    $scope.sample_frequencies = function() { return sample_frequencies.frequencies}
    page($scope,15)
  }]);
gameControllers.controller('magnifyCtrl', ['$scope',  'pageStatus', 'magnifierDrag',
  function($scope, page, magnifier) {
    page($scope,16)
    magnifier.drag_action($scope)
    $scope.slider_down = magnifier.slider_down
  }]);
gameControllers.controller('smallestCtrl', ['$scope', 'pageStatus', 
  function($scope, page) {
    var sample_mean_checked = false
    var sample_median_checked = false
    var show_me = false
    $scope.mean_checked = function() {
      sample_mean_checked = true
      sample_median_checked = false     
    }
    $scope.median_checked = function() {
      sample_median_checked = true
      sample_mean_checked = false      
    }
    $scope.mean = function() {return sample_mean_checked}
    $scope.median = function() {return sample_median_checked}
    $scope.already_checked = function () {
      return (sample_mean_checked || sample_median_checked) && !show_me
    }
    $scope.show_me_action = function() {show_me = true}
    $scope.show_me = function() {return show_me}
    page($scope,17)
  }]);

gameControllers.controller('bestRegionCtrl', ['$scope', 'pageStatus', '$location',
  function($scope, page, location) {
    var wrong_sample_estimate = false;
    $scope.check_reasonable = function() { 

      if ($scope.reasonable_size === undefined) {$scope.reasonable_size =0}
      console.log('check_reasonable', $scope.reasonable_size)
      var estimate = 0 || parseInt($scope.reasonable_size)
      if (estimate > 50 || estimate < 40){
        window.show_modal("wrong_sample_estimate")
      }
      else {location.path('/sample/you_got_it')}
      
    }
    $scope.next = function() { location.path('/sample/you_got_it')}
    $scope.try_again = function () {
      var elem =  $('#wrong_sample_estimate')
      elem.animate({opacity: 0}, 100, function() { elem.addClass('hide'); elem.css('opacity',1);})
    }
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
