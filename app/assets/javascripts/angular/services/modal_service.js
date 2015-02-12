game.service('modalService', function() {

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
});
