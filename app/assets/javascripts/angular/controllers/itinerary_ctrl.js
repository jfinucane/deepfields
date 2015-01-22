
gameControllers.controller('ItineraryCtrl', ['$scope', '$routeParams', '$window', 'gameProgress',
  function($scope, $routeParams, win, gameProgress) {
    /*$scope.phoneId = $routeParams.phoneId;*/

    
    p=gameProgress
    $scope.show_signpost = p.show_signpost

    


  }]);

