gameControllers.controller('OutbackCtrl', ['$scope', 'gameProgress', 'drawProgressDots', 'modalService',
  function($scope, gameProgress, drawProgressDots, modal) {   
    var p=gameProgress
    $scope.signpost_visited = p.signpost_visited
    $scope.show_signpost = p.show_signpost
    p.set_step(3);
    p.set_background_color()
    $('#main_itinerary .outside_sign').addClass('adjust_pullup_signs')
    
    var d=drawProgressDots
    d.draw_progress_trail(p.progress())

    $scope.modal = modal


  }]);
  

