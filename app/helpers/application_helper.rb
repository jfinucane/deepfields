module ApplicationHelper

def field
	session['hdf_field']
end

def field_name
  session['hdf_field'] == 'n' ? 'North' : 'South'
end  

def other_field
  session['hdf_field'] != 'n' ? 'n' : 's'
end

def other_field_name
  session['hdf_field'] != 'n' ? 'North' : 'South'
end

end