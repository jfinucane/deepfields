class ApplicationController < ActionController::Base

  before_filter :set_back_path
  def set_back_path
    path = @_env['PATH_INFO']
    if path != '/lesson/index'
      session['back_path'] = path
    end
  end
  def check_for_field
    path = @_env['PATH_INFO']
    controller_needs_hdf = /bias|sample|funnel/
    session['continue_after_selection'] = controller_needs_hdf.match(path) ? path : ''
    puts 'CHECK_FOR_FIELD', session
    if session['field'].nil? || session['field']== 'None'
      redirect_to lesson_classic_path
    end
  end
  
  def galaxy_data_points
    hdf = session['hdf_field']
    file_name='lib/HDF' + hdf +'.yaml'
    field_name= 'hdf' + hdf
    YAML.load(File.read(file_name))[field_name]
  end

end
