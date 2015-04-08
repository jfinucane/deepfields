'use strict';


gameControllers.controller('questionLastStopCtrl', ['$scope', 'pageStatus', 'jeepAnimation','$location', 
  function($scope, page, jeep, location) {
    page($scope,30)
    jeep.jeep_comes_in()
    var reveal_more = function (){ console.log('xyz'); location.path('/last_stop/different'); $scope.$apply()}
    $scope.reveal = function() {
    	jeep.jeep_goes_out()
        setTimeout(function(){reveal_more()}, 1500)
    }
  }]);

gameControllers.controller('differentCtrl', ['$scope', 'pageStatus',
  function($scope, page) {
    page($scope,31)
  }]);

gameControllers.controller('congratulationsCtrl', ['$scope', 'pageStatus',
  function($scope, page) {
    page($scope,32)
  }]);


