game.service('modalService', function() {

	var modal_stack = []


    this.modal = {}

	this.open = function(id) {
		modal_stack.push(id)
		video_available()
		console.log('stacked',id)
	} 
// all modals stack on top of each other, so remove them in LIFO order
	this.close = function() {
       id = modal_stack.pop()
       video_available()
       console.log('trying to close',id)
	}
    
    this.show =function(id) {
    	return ( modal_stack.indexOf(id) > -1)
    }
    var video_available = function () {
        var video_pos= modal_stack.indexOf('Meet the HDFs')
        var video_last =  (video_pos == modal_stack.length-1) &&  (video_pos > -1)
        if (video_last){ 
          if ($('.inner_frame_video').length==0) { $('.outer_frame_video').append(iframe[0].outerHTML); console.log('attached', iframe[0].outerHTML)}
          }
        else {
          if ($('.inner_frame_video').length>0) {iframe = $('.inner_frame_video').detach(); console.log('detached', iframe[0].outerHTML)}
        }
    }

    this.modal.open = this.open
    this.modal.close = this.close
    this.modal.show = this.show
    this.modal.video_available = this.video_available
});
