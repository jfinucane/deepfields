class ApplicationController < ActionController::Base
  before_filter :track_itinerary, :no_itinerary_pullup_needed, :set_back_path
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
  def set_background_color
    path = @_env['PATH_INFO']
    path = path.downcase
    background ='error'
    if path == '/' || path == '/lesson/home'
      background_color = 'intro'
    elsif path =='/lesson/index'
      background_color = 'default'
    else
      background_color = path.split('/')[1]
    end
     background_color = 'lesson' if background_color == 'finder'
     background_color =  background_color + '_color'
  end
  def track_itinerary
    path = @_env['PATH_INFO']
    if path == '/' || path == '/lesson/home' ||
      session['progress'].nil? || session['progress']== 'None'
      session['progress'] = []
    end
    @progress = session['progress']
    dot = PROGRESS[path]
    if dot
      @progress[dot] = true
      @progress[0] = dot
    end
    boomerang_at =[2,10,13,22,29]
    undone = @progress.length
    for i in (2..(@progress.length - 1))
      if !boomerang_at.include?(i) && @progress[i].nil?
        undone = i
        break
      end
    end
    @background_color =set_background_color
    @next_signpost = '.boxy6'
    @next_signpost = '.boxy5' if undone < boomerang_at[4]
    @next_signpost = '.boxy4' if undone < boomerang_at[3]
    @next_signpost = '.boxy3' if undone < boomerang_at[2]
    @next_signpost = '.boxy2' if undone < boomerang_at[1]
  end
  def no_itinerary_pullup_needed
    path = @_env['PATH_INFO']
    @show_progress_pullup =  !(['/', '/lesson/home', '/lesson/index'].include?(path))
  end
  def galaxy_data_points
    hdf = session['hdf_field']
    file_name='lib/HDF' + hdf +'.yaml'
    field_name= 'hdf' + hdf
    YAML.load(File.read(file_name))[field_name]
  end

end
