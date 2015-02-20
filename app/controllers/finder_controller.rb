class FinderController < ApplicationController
  require 'json'
  layout false
  def select 
    #TODOJF this default is for angular testing
    @hdf_field = params['hdf_field'] || 'n'
    @field=@hdf_field
    session['hdf_field'] = @hdf_field
    session['field'] = @hdf_field
    session['selected_field'] = @hdf_field
    @hdf_name = @hdf_field == 'n' ? "North" : "South"
  end
  def hdf
    respond_to do |format|
      #format.json { render json: galaxy_data_points.to_json, layout: false}
      n = File.read('lib/HDFn.yaml')
      s = File.read('lib/HDFs.yaml')
      format.json { render json: YAML.load(n + s).to_json, layout:false}
    end
  end
  def pct (freq, ss)
  	if ss == 0
  	  0.0
  	else
  	  freq *100.0/ss
  	end
  end
  def type_map
  #summarize galaxy types which are numbered 1-4 in the array
  #into three categories
     [0,0, 1,1,2]
  end
  def type_names
  #these categories summarize the four categories referenced
  #in the lib/HDF YAML file referenced in the points method
    ['Elliptical', 'Spiral', 'Irregular']
  end
  def got_counts
    @selected = JSON.parse(params['galaxies'])
    @sample_size = @selected.count
    @field = params['hdf_field']
    @field = @field.strip
    points = galaxy_data_points
    frequencies = [0,0,0]
    @selected.each{|c|
      g_type = points[c][2]
      type = type_map[g_type]
      frequencies[type] += 1
    }
    session['field'] = @field
    session['hdf_field'] = @field
    session['sample_size'] = @selected.count
    session['percent'] = pct(frequencies[2],@sample_size)
    session['galaxies'] = @selected 
    session['your_persistent_freq_sample'] = params['your_persistent_freq_sample']
    @types = []
    type_names.each_with_index{|t,i|	
      @types << {'name' => t, 'frequency' => frequencies[i], 
        'percent'=> pct(frequencies[i],@sample_size)  }
    }
    if session['continue_after_selection'].nil? || session['continue_after_selection'] == '' || session['continue_after_selection'] ==' '  
      @continue_path = 'finder_irregulars_path'
    else
      controller_method = session['continue_after_selection'].split('/')
      @continue_path = controller_method[1] +  '_' + controller_method[2] + '_path'
      @return_to_text = controller_method[1]
    end
  end
  def got_counts_back
    @field = session['field']
    @selected = session['galaxies']
    @sample_size = session['sample_size']
    points = galaxy_data_points
    frequencies = [0,0,0]
    @selected.each{|c|
      g_type = points[c][2]
      type = type_map[g_type]
      frequencies[type] += 1
    }
    @types = []
    type_names.each_with_index{|t,i|
      @types << {'name' => t, 'frequency' => frequencies[i],
        'percent'=> pct(frequencies[i],@sample_size)  }
    }
    @return_to_text = 'default text'
    @continue_path = 'finder_irregulars_path'
    render 'got_counts'
  end
  def irregulars
    puts session.inspect
  	@percent = session['percent']
  	@field = session['field']
  	@field_name = @field == 'n' ? 'North' : 'South'
    @sample_size = session['sample_size']
  end
  def find_out
    puts 'find_out', session
    session[:stage] = 'Now look at bias'
  end
  def next
  end
end