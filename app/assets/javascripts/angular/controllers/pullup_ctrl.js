gameControllers.controller('PullupCtrl', ['$scope', 'gameProgress',
  function($scope, gameProgress) {
    var p= gameProgress
    console.log("Loaded the PULLUP CTRL controller")
    $scope.show_pullup = function(){
    	return (p.pullup());
    }
   $scope.signpost_visited = p.signpost_visited
  }]);
