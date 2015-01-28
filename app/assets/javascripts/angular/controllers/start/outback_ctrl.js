gameControllers.controller('OutbackCtrl', ['$scope', '$routeParams', 'gameProgress', 'drawProgressDots2',
  function($scope, $routeParams, gameProgress, drawProgressDots2) {
    /*$scope.phoneId = $routeParams.phoneId;*/
    console.log('itin ctrl')
    
    p=gameProgress
    $scope.signpost_visited = p.signpost_visited
    $scope.show_signpost = p.show_signpost
    p.set_step(3);
    p.set_background_color()
    $('#main_itinerary .outside_sign').addClass('adjust_pullup_signs')
  
    d=drawProgressDots2
    d.draw_progress_trail(p.progress())

  c = document.getElementById("progress_canvas")
  console.log('CANVAS',c)
  if (c == undefined || c == null){
    return}
  ctx = c.getContext("2d")
  horizontal_dot_range(ctx, 12, 380, 12)
  horizontal_dot_range(ctx, 570, 930, 12)
  horizontal_dots(ctx,268)
  vertical_dots(ctx, 12, 12, 272)
  vertical_dots(ctx, 927, 12, 272)

  

  }]);
  

