class LessonController < ApplicationController
  require 'json'
  layout false
  def home
    session['continue_after_selection'] = ' '
    @show_progress_pullup = false
    @stuff=347
  end

  def select 
    @hdf_field = params['hdf_field'] || 'None'
    @hdf_name = params['hdf_field'] == 'n' ? "North" : "South"
  end
  
  def hdfn
  	points = YAML.load(File.read('lib/HDFn.yaml'))['hdfn']
  	respond_to do |format|
      format.json { render json: points.to_json, layout: false}
    end
  end 

  def hdfs
		points = YAML.load(File.read('lib/HDFs.yaml'))['hdfs']
		respond_to do |format|
	    format.json { render json: points.to_json, layout: false}
	  end
  end

  def got_counts
    puts params
    @counts = params['galaxies']
  end

  def index
    session['continue_after_selection'] = ' '
    @back_path = 'lesson_home_path'
    path = session['back_path']
    if (!path.nil?) && (path != 'None') && (path != "/")
      controller_method = session['back_path'].split('/')
      @back_path = controller_method[1] +  '_' + controller_method[2] + '_path'
    end
    @show_progress_pullup = false
    session[:stage]=nil
    if session[:stage] == nil
      session[:stage] = "Congrats, you've uncovered some facts about the universe by comparing the two HDFs. To finish the safari, click on the crocodile."
      flash[:notice] = "Congrats, you've uncovered some facts about the universe by comparing the two HDFs. To finish the safari, click on the crocodile."
    else 
      flash[:notice] = session["stage"]
    end  
  end

  def classic
    @caution_modal = false
    if (session['continue_after_selection']||'').length > 3
      @caution_modal = true 
    end
  end

  def explain
    topic = params['topic']
    render '/explain/' + topic
  end

  def look_forward
  end

  def bias
    session[:stage] = "Now let's study the effect of bias"

    redirect_to '/lesson/index'
  end
  def video
    render 'video',:layout=>false
  end
  def galaxy_types
    render 'galaxy_types', :layout=> false
  end
  def travelogue
    render 'travelogue', :layout=> false
  end
  def deep
    render 'deep', :layout=>false
  end
  def download_pdf
    send_file(
      "#{Rails.root}/app/assets/media/travelogue.pdf",
      filename: "Galaxy_Hunter_travelogue.pdf",
      type: "application/pdf"
    )
   end
   def display_pdf
      send_file(
      "#{Rails.root}/app/assets/media/travelogue.pdf",
      filename: "Galaxy_Hunter_travelogue.pdf",
      type: "application/pdf",
      disposition: 'inline'
    )
   end
   def looking
   end
   def secrets
   end
   def finish
   end
   def enter
     @warn = session['field'].nil? and !session['back_path'].nil?
     puts 'WARN', session, @warn
   end 
  def stare
    session['continue_after_selection'] = ' '
  end
  def outback
    session['continue_after_selection'] = ' '
  end
  def default
  end
end
