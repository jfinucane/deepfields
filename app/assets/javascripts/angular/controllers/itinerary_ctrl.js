gameControllers.controller('ItineraryCtrl', ['$scope', '$routeParams',
 '$window', 'gameProgress', 'drawProgressDots',
  function($scope, $routeParams, win, gameProgress, drawProgressDots) {
    p=gameProgress
    $scope.show_signpost = p.show_signpost
    p.set_step(2);
    p.set_background_color()
    d=drawProgressDots
    d.draw_progress_trail(p.progress(), 'itinerary') 
   
  }]);

