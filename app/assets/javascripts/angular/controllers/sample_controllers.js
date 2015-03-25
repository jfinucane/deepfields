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
    var five_sample_frequencies = draw.sample_draw(ctx)
    sampleDraw.set_sample_frequencies(five_sample_frequencies)
    $scope.show_min_max_plot = false
    $scope.show_plot = function() {
      $scope.show_min_max_plot = true
    }
    $scope.median_checked = function() {
      sample_median_checked = true
      sample_mean_checked = false
      draw.red_diamond(ctx, five_sample_frequencies.median_pixel,102, 7)
    }
    $scope.mean_checked = function() {
      sample_mean_checked = true
      sample_median_checked = false
      draw.green_circle(ctx, five_sample_frequencies.mean_pixel, 105,9)
    }
    $scope.recalculate = function() {
      sample_frequencies = draw.sample_draw(ctx)
      sample_mean_checked = false
      sample_median_checked = false
    }
    $scope.mean = function() {return sample_mean_checked}
    $scope.median = function() {return sample_median_checked}
    $scope.sample_frequencies = function() { return five_sample_frequencies.frequencies}
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
gameControllers.controller('bestRegionCtrl', ['$scope', 'pageStatus', '$location', 'bestSampleDraw', 'sampleDraw', 
  function($scope, page, location, bestSampleDraw, sampleDraw) {
    page($scope,18)
    var sample_mean_checked = false
    var sample_median_checked = false
    bestSampleDraw.dummy_draw(0)
    $scope.check_reasonable = function() { 
      if ($scope.reasonable_size === undefined) {$scope.reasonable_size = 0}
      console.log('check_reasonable', $scope.reasonable_size)
      var estimate = 0 || parseInt($scope.reasonable_size)
      if (estimate > 50 || estimate < 40){
        window.show_modal("wrong_sample_estimate")
      }
      else {
        sampleDraw.set_reasonable_size(estimate)
        location.path('/sample/you_got_it')
      }   
    }
    $scope.next = function() { 
      sampleDraw.set_reasonable_size(45)
      location.path('/sample/you_got_it')
    }
    $scope.try_again = function () {
      var elem =  $('#wrong_sample_estimate')
      elem.animate({opacity: 0}, 100, function() { elem.addClass('hide'); elem.css('opacity',1);})
    }
    $scope.mean_checked = function() {
      console.log('checked')
      sample_mean_checked = true
      sample_median_checked = false
      bestSampleDraw.green_mean()     
    }
    $scope.median_checked = function() {
      sample_median_checked = true
      sample_mean_checked = false
      bestSampleDraw.red_median()      
    }
    $scope.mean = function() {return sample_mean_checked}
    $scope.median = function() {return sample_median_checked}
  }]);
gameControllers.controller('youGotItCtrl', ['$scope', 'pageStatus', 'bestSampleDraw', 'sampleDraw', 'galaxyData',
  function($scope, page, bestSampleDraw, sampleDraw, galaxyData) {
    $scope.reasonable_size = sampleDraw.get_reasonable_size()
    $scope.sample_size = galaxyData.count_of_samples()
    bestSampleDraw.dummy_draw()
    page($scope,19)
  }]);
gameControllers.controller('compareAstronomerCtrl', ['$scope', 'pageStatus', 'sampleDraw',
  function($scope, page, sampleDraw) {
    $scope.reasonable_size = sampleDraw.get_reasonable_size()
    page($scope,20)
  }]);
gameControllers.controller('youVersusCtrl', ['$scope', 'pageStatus', 'sampleTypeFrequency', 'sampleDraw', 'fieldChoice',
  function($scope, page, sampleTypeFrequency,sampleDraw, fieldChoice) {
    sampleTypeFrequency.create_type_frequency()
    $scope.reasonable_size = sampleDraw.get_reasonable_size()
    $scope.type_freq = sampleTypeFrequency.type_frequency
    $scope.astronomer_freq = sampleTypeFrequency.ASTRONOMER
    page($scope,21)
  }]);
