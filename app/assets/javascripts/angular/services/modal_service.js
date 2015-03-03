game.service('modalService', function() {
  biased_flag = ''
  bias_id= ''
  oops_id=''
  var modal_stack = []
  this.open = function(id) {
      modal_stack.push(id)
      console.log('stacked',id)
  }
// all modals stack on top of each other, so remove them in LIFO order
  this.close = function() {
       id = modal_stack.pop()
       console.log('trying to close',id)
	}
  this.show =function(id) {
      return ( modal_stack.indexOf(id) > -1)
  }
// TODO hardwired to the name of the modal with the video.
  this.video_on_top = function () {
        var video_pos= modal_stack.indexOf('Meet the Hubble Deep Fields')
        var video_last =  (video_pos == modal_stack.length-1) &&  (video_pos > -1)
        return video_last
  }
  
  this.bias = function(bias, id) {
    bias_id = id
    biased_flag = bias ? 'biased' : 'unbiased'
    if ((bias_id == 'bias_eyes_closed') ||  (bias_id == 'bias_computer')) {
       oops_id = '#' + bias_id + '_' + biased_flag
       $(oops_id).removeClass('hide')
       modal_frame = oops_id + " .position_modal"
       top_dist = (676 -$(modal_frame).height())/2 -24
       $(modal_frame).css('top', top_dist)
        $(oops_id).animate (
          {opacity:1}, 200)
       }
    else {
      if (biased_flag == 'biased') {
       thats_right(id)
       }
      else {
       $('#oops').removeClass('hide')
       $('#oops').animate({opacity:1}, 100)
       oops_id = '#oops'
       console.log ('setting oops id', oops_id)
      }
    }
  }
  this.bias_close = function(){
    $(oops_id).animate({opacity:0}, 100, function(){
      $(oops_id).addClass('hide')
      if(bias_id=='bias_computer') {
        check_fill(bias_id, 40, 'unbiased')
      }
      else {
        check_fill(bias_id, 40)
      }
    })
  }
});
