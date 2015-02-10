game.service('modalService', function() {

	var modal_stack = []

	this.open = function(id) {
		modal_stack.push(id)
		$(id).removeClass('hide')
	} 
// all modals stack on top of each other, so remove them in LIFO order
	this.close = function() {
       id = modal_stack.pop()
       console.log('trying to close',id)
       $(id).addClass('hide')
	}



});
