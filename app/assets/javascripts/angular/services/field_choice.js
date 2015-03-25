game.service('fieldChoice', function() {
  var active_field = ''
  this.set_field = function(field){
  	active_field= field.toLowerCase();
  	return true;
  }
  this.get_field = function() {
  	return active_field;
  }
  this.field_name = function(field){
  	var field_name = 'None'
  	if (active_field == 'n') {
  		field_name = 'North'
  	}
  	else {
  		field_name = 'South'
  	}
  	return field_name;
  }
  this.get_field_name = function() {
    return this.field_name(this.get_field())
  }

  this.other_field= function(field) {
  	var other_field = 'None'
  	if (active_field == 's') {
  		other_field =  'n';
  	}
  	if (active_field == 'South') {
  		other_field = 'n'
    }
    return other_field
  }
  this.change_field= function(field) {
  	active_field = this.other_field(field)
  	return active_field
  }      
})