game.service('modalService', ['biasModal', function(biasModal) {
  var biased_flag = ''
  var bias_id= ''
  var oops_id=''
  var modal_stack = []
  var checked_list = []
  this.open = function(id) {
      modal_stack.push(id)
      console.log('stacked',id)
  }
// all modals stack on top of each other, so remove them in LIFO order
  this.close = function() {
      console.log('modal stack', modal_stack)
      modal_stack.pop()
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
    if (checked_list.indexOf(id) > -1){
      return
    }
    checked_list.push(id)
    bias_id = id
    biased_flag = bias ? 'biased' : 'unbiased'
    if ((bias_id == 'bias_eyes_closed') ||  (bias_id == 'bias_computer')) {
       oops_id = '#' + id + '_' + biased_flag
       biasModal.open_id_specific_modals(oops_id)
    }
    else {
      if (biased_flag == 'biased') {
       biasModal.thats_right(id)
       }
      else {
       oops_id = '#oops'
       biasModal.open_oops_modal()
      }
    }
  }
  this.bias_close = function(){
    $(oops_id).animate({opacity:0}, 100, function(){
      $(oops_id).addClass('hide')
      if(bias_id=='bias_computer') {
        biasModal.check_fill(bias_id, 40, 'unbiased')
      }
      else {
        biasModal.check_fill(bias_id, 40, 'biased')
      }
    })
  }
  this.show_next_bias = function () {
    return (checked_list.length > 7)
  }
  this.reset_checklist = function () {
    console.log('RESETTING')
    checked_list =[]
  }
}]);
