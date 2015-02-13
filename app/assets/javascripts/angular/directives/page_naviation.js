game.directive('pageForward', function() {
  return {
    scope: {
        forward: '=url'
    }, 	
    template: "<a href='{{forward}}'> <div class='next_signpost next_position'></div></a>"
    }

})
game.directive('pageBack', function() {
  return {
    scope: {
        back: '=url'
    }, 	
    template: "<a href='{{back}}'> <div class='back back_position'></div></a>"
    }
})
game.directive('pageNav', function() {
  return {
    scope: {
    	forward: '=forward',
        back: '=back'
    }, 	
    template: "<a href='{{back}}'> <div class='back back_position'></div></a>" +
              "<a href='{{forward}}'> <div class='next_signpost next_position'></div></a>"
    }

})