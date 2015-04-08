game.service('jeepAnimation', ['$location', function(location){

  var turn_around = function () {
    $('#facing_left').addClass('hide')
    $('#facing_right').removeClass('hide')
  }  
  var mv_animate = function(elem_id, duration, x, y) {
    $(elem_id).animate({top: y,left: x}, duration)
  }    
  var mv = function (elem_id, start, duration, x, y) {
    setTimeout(function(){mv_animate(elem_id, duration, x, y)}, start)
  }
  var y_bounce = function(start, duration,dist) {
    mv('.hst_bounce', start, duration/2, '-=0px', '+' + dist )
    mv('.hst_bounce', start+duration/2,duration/2, '-=0px', '-' + dist)
  }  
  var x_bounce = function(start, duration,dist) { 
    mv('.jeep_left', start, duration/2, '+' + dist, '-=0px')
    mv('.jeep_left', start+duration/2,duration/2, '-' + dist, '-=0px')
  }
  this.jeep_comes_in = function() {
    mv('.jeep_left', 0, 500, '-=200px', '-=0px')
    mv('.hst_left_facing',  700, 500, '-=0px', '+=520px')
    x_bounce(500, 200, '=12px')
    y_bounce(1200, 100, '=10px')
    y_bounce(1300, 250, '=5px')
  }
  this.jeep_goes_out = function (){
    turn_around()
    mv('.facing_right', 500, 150, '-=40px', '+=0px')
    mv('.facing_right', 700, 800, '+=300px', '+=0px')
    }    
   
}])