'use strict';
gameControllers.controller('enterCtrl', ['$scope', 'pageStatus', 'fieldChoice', '$location',
  function($scope, page, fieldChoice, location) {
    page($scope,23)
    $scope.field = fieldChoice.get_field()
    $scope.look_at_other_hdf = function() {
      var field = fieldChoice.get_field()
      field = field=='n' ? 's' : 'n'
      fieldChoice.set_field(field)
      location.path('/fields/sample')
    }
  }]);
gameControllers.controller('sampleCtrl', ['$scope',  'pageStatus', 'fieldChoice', '$location', 'galaxyData', 'fieldSampleDraw',
  function($scope, page, fieldChoice, location, galaxyData, fieldSampleDraw) {
      $scope.bad_sample = false;
      $scope.good_sample = false
      $scope.too_big = false
      $scope.reasonable_size = ''
      $scope.modal_too_big = false
      $scope.modal_bad_sample = false
      var get_size = function(){return $scope.reasonable_size}
      $scope.check_reasonable = function() {
        var digits = get_size()
        if(digits===undefined){digits = 0}
        var size = parseInt(digits)
        console.log('size', size, 'x')
        if (size==0 || size>300) {
          $scope.modal_bad_sample = true
          $scope.good_sample = false
        }
        else {
          $scope.good_sample=true
          fieldSampleDraw.set_reasonable_size(size)
          fieldSampleDraw.other_field_draw(size)
        }
      }
      $scope.next_action = function() {
        var digits = get_size()
        if(digits===undefined){digits = 0}
        var size = parseInt(digits)
        if (size>0 && size<= 50) { location.path('/fields/evaluate') }
        else { 
          $scope.modal_too_big = true
          $scope.good_sample = false
        }
      }
    page($scope,24)
  }]);

gameControllers.controller('evaluateCtrl', ['$scope',  'pageStatus', 'fieldChoice','fieldSampleDraw', 'sampleTypeFrequency',
  function($scope, page, fieldChoice, fieldSampleDraw, sampleTypeFrequency) {
    page($scope,25)
    $scope.field = fieldChoice.get_field()
    $scope.reasonable_size = fieldSampleDraw.get_reasonable_size()
    $scope.galaxy_type_frequency = fieldSampleDraw.get_type_frequencies()
    $scope.astronomer = sampleTypeFrequency.ASTRONOMER
    $scope.no = function(){
      $scope.do_you_think = true
      if ($scope.reasonable_size > 39) {
        $scope.plausible= true
        $scope.you_said_no = true
        $scope.you_said_yes = false
      }
      else window.show_modal("implausible_yes")
    }
    $scope.yes = function() {
      $scope.do_you_think = true
      if ($scope.reasonable_size > 39) {
        $scope.plausible=true
        $scope.you_said_yes = true
        $scope.you_said_no = false
      }
      else window.show_modal("implausible_sorry")
    }
    $scope.skip = function() {
      window.close_modal('implausible_yes')
      window.close_modal('implausible_sorry')
      $scope.suggested_sample = true
      fieldSampleDraw.set_reasonable_size(45)
      $scope.reasonable_size = 45
    }
  }]);

gameControllers.controller('questionSymmetryCtrl', ['$scope',  'pageStatus', 'sampleTypeFrequency',
  function($scope, page, sampleTypeFrequency) {
    $scope.astronomer_frequencies = sampleTypeFrequency.astronomers_frequencies
    $scope.type_names = sampleTypeFrequency.type_names
    page($scope,26)
  }]);

gameControllers.controller('answerCtrl', ['$scope',  'pageStatus', 'sampleTypeFrequency',
  function($scope, page, sampleTypeFrequency) {
    $scope.astronomer_frequencies = sampleTypeFrequency.astronomers_frequencies
    $scope.type_names = sampleTypeFrequency.type_names
    page($scope,27)
  }]);

gameControllers.controller('uniformCtrl', ['$scope',  'pageStatus', 'fieldChoice', 'sampleTypeFrequency',
  function($scope, page, fieldChoice, sampleTypeFrequency) {
    page($scope,28)
  }]);

