
gameControllers.controller('ItineraryCtrl', ['$scope', '$routeParams', '$window', 'gameProgress',
  function($scope, $routeParams, win, gameProgress) {
    /*$scope.phoneId = $routeParams.phoneId;*/
    console.log('itin ctrl')
    
    p=gameProgress
    $scope.signpost_visited = p.signpost_visited
    $scope.show_signpost = p.show_signpost
    
    c = document.getElementById("border_canvas")
    ctx = c.getContext("2d")
 
    horizontal_dots(ctx, 12)
    horizontal_dots(ctx, 657)
    vertical_dots(ctx, 12, 12, 657)
    vertical_dots(ctx, 927, 12, 657) 


  }]);

