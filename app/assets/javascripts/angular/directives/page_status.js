gameControllers.service('pageStatus', ['gameProgress', 'drawProgressDots', 'modalService', 'fieldChoice', 'galaxyData', 'pullup',
  function(gameProgress, drawProgressDots, modal, fieldChoice, galaxyData, pullup) { 
      return function($scope, step){
            var p=gameProgress
      $scope.signpost_visited = p.signpost_visited
      $scope.show_signpost = p.show_signpost
      p.set_step(step);
      p.set_background_color()
      $('#main_itinerary .outside_sign').addClass('adjust_pullup_signs') //TODO ng-class
      var d=drawProgressDots
      d.draw_progress_trail(p.progress())
      $scope.modal = modal
      $scope.fieldChoice = fieldChoice
      $scope.galaxyData = galaxyData
      pullup.toggle_down()
      if (fieldChoice.get_field()== ''){  //TODOJF Testing code
        fieldChoice.set_field("s") 
        galaxyData.create_default_data()
        console.log('using DEFAULT data')
        console.log(galaxyData.frequencies()[2].freq)
      }
    }
  }
])
