gameControllers.controller('OutbackCtrl', ['$scope', '$routeParams', 'gameProgress', 'drawProgressDots',
  function($scope, $routeParams, gameProgress, drawProgressDots) {   
    var p=gameProgress
    $scope.signpost_visited = p.signpost_visited
    $scope.show_signpost = p.show_signpost
    p.set_step(3);
    p.set_background_color()
    $('#main_itinerary .outside_sign').addClass('adjust_pullup_signs')
    
    var d=drawProgressDots
    d.draw_progress_trail(p.progress())

    var c = document.getElementById("progress_canvas")
    var ctx = c.getContext("2d")
    horizontal_dot_range(ctx, 12, 380, 12)
    horizontal_dot_range(ctx, 570, 930, 12)
    horizontal_dots(ctx,268)
    vertical_dots(ctx, 12, 12, 272)
    vertical_dots(ctx, 927, 12, 272)

  

  }]);
  

