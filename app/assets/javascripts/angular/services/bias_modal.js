game.service('biasModal', function(){
  check = function(c, time,ctx){
      ctx.moveTo(2,2)
      var i = 3; 
      var handle = setInterval (
      	function(){
          ctx.lineTo(i,i)
          i += 2
          ctx.stroke()
          if (i > 21) {
            clearInterval(handle)
            check_cross(c, time, ctx)
          }
        },  
        time)
  }  
  check_cross = function(c,time, ctx) {
    ctx.moveTo(20,2)
    ctx.beginPath()
    var i = 3;
    var handle = setInterval (function(){
        ctx.lineTo(22-i,i)
        i += 2
        ctx.stroke()
        if (i > 21) { clearInterval(handle) }
        },  	
      time)    
  }      
  this.check_fill = function(id, time, biased) { 
    var c = $('#' + id + ' .' + biased + ' canvas')
    var ctx = c[0].getContext('2d')
    ctx.beginPath()
    ctx.strokeStyle = '#9c815b'
    ctx.lineWidth = 2
    setTimeout(check(c, time, ctx),  100)
  }    
  this.thats_right = function(id) {
    this.check_fill(id,20, 'biased')
    var msg_id = '#' + id + '_msg'
    var y = $('#'+id).position().top+60
    $(msg_id).css('top', y-60).removeClass('hide')
    $(msg_id).animate({opacity:0}, 2000, function(){ 
    	$(msg_id).addClass('hide').css('opacity', 1)
    })
  }
  this.open_id_specific_modals = function(oops_id){
  	$(oops_id).removeClass('hide')
    modal_frame = oops_id + " .position_modal"
    top_dist = (676 -$(modal_frame).height())/2 -24
    $(modal_frame).css('top', top_dist)
    $(oops_id).animate (
       {opacity:1}, 200)
    }
  this.open_oops_modal = function (){
  	$('#oops').removeClass('hide')
    $('#oops').animate({opacity:1}, 100)
  }
  this.fast_check = function(id) {
  	if (id == 'bias_computer') {
  		this.check_fill('bias_computer', 20, 'unbiased')
  	}
  	else {
  	this.check_fill(id, 20, 'biased')
  	} 
  }
});        
