game.service('modalService', function() {

	var modal_stack = []

	this.open = function(id) {
		modal_stack.push(id)
		//$(id).removeClass('hide')
		console.log('stacked',id)
	} 
// all modals stack on top of each other, so remove them in LIFO order
	this.close = function() {
       id = modal_stack.pop()
       console.log('trying to close',id)
       //$(id).addClass('hide')
	}
    
    this.show =function(id) {
    	console.log(modal_stack)
    	console.log('looking to show '+id, ( modal_stack.indexOf(id) > -1))
    	return ( modal_stack.indexOf(id) > -1)
    }

    this.modal = {}
    this.modal.open = this.open
    this.modal.close = this.close
    this.modal.show = this.show
});
