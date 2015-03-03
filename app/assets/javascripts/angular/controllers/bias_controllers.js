'use strict';
gameControllers.controller('banishingCtrl', ['$scope', 'pageStatus', 'modalService',
  function($scope, page, modal) {
  	modal.reset_checklist()
    page($scope,11)
  }]);

gameControllers.controller('compareCtrl', ['$scope', 'pageStatus', 'biasModal', 'galaxyData',
  function($scope, page, biasModal, galaxyData) {
  	  $scope.galaxyData = galaxyData
  	  var rows = $('.compare_row')
  	  rows.map(function(row) { biasModal.fast_check(rows[row].id)})
      setTimeout (function (){
        $("#bias_computer .compare_pct_row").addClass('redden_background')
        $("#bias_computer .compare_method_row").addClass('redden_background')
      }, 1000)
    page($scope,12)
  }]);
