gameControllers.controller('GameComponentsCtrl', ['$scope', 'gameProgress', 'pullup',
  function($scope, gameProgress, pullup) {
    var progress= gameProgress
    $scope.show_pullup = function(){
    	return (progress.pullup());
    }
    $scope.pullup = pullup
   $scope.signpost_visited = progress.signpost_visited
   window.$scope = $scope
   $scope.define = function(word,event){ 
      $('.vocab_inner#'+word).removeClass('hide')
      var browser_width = $(window).width()
      var frame_x = event.pageX
      //TODOJF address pixel size of characters
      var width = event.target.innerHTML.length * 4
      var frame_y = event.pageY
      if (browser_width > 940){ 
        frame_x = frame_x - (browser_width-940) /2 
      }
      console.log(frame_x, width, frame_y, $('#vocab_position').height())
      x = frame_x + width
      y = frame_y - 70 - $('#vocab_position').height()
      if (x > 580){
        x = Math.max(frame_x - 370, 0)
      }
      if (y < 0) {
      	y= frame_y + 20 -24
      }
      $('#vocab_position').css({top:y, left: x})
      $('#vocab_position').removeClass('hide')
   }
   $scope.close_definition = function() {
   	 $('.vocab_inner').addClass('hide')
     $('#vocab_position').addClass('hide')
   }
  }]);
