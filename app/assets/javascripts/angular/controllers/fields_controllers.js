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

gameControllers.controller('sampleCtrl', ['$scope',  'pageStatus', 'fieldChoice',
  function($scope, page, fieldChoice) {
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

