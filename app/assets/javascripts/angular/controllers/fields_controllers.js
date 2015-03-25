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
      $scope.reasonable_size
      var get_size = function(){return $scope.reasonable_size}
      $scope.check_reasonable = function() {
        var digits = get_size()
        if(digits===undefined){digits = 0}
        var size = parseInt(digits)
        fieldSampleDraw.set_reasonable_size(size)
        console.log('size', size, 'x')
        if (size==0 || size>300) { console.log('bad number');$scope.bad_sample = true}
        else {
          $scope.good_sample=true
          fieldSampleDraw.other_field_draw(size)
        }
      }
      $scope.next_action = function() {
        var digits = get_size()
        if(digits===undefined){digits = 0}
        var size = parseInt(digits)
        if (size>0 && size< 50) { location.path('/fields/evaluate') }
        else { console.log('too big'); $scope.too_big = true} 
      }
    page($scope,24)
  }]);

gameControllers.controller('evaluateCtrl', ['$scope',  'pageStatus', 'fieldChoice',
  function($scope, page, fieldChoice) {
    page($scope,25)
  }]);

gameControllers.controller('questionSymmetryCtrl', ['$scope',  'pageStatus', 'fieldChoice',
  function($scope, page, fieldChoice) {
    page($scope,26)
  }]);

gameControllers.controller('answerCtrl', ['$scope',  'pageStatus', 'fieldChoice',
  function($scope, page, fieldChoice) {
    page($scope,27)
  }]);

gameControllers.controller('uniformCtrl', ['$scope',  'pageStatus', 'fieldChoice',
  function($scope, page, fieldChoice) {
    page($scope,28)
  }]);

