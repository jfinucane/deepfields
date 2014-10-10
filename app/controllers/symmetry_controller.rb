class SymmetryController < ApplicationController
  def enter
    session['hdf_field'] = session['selected_field']
  end
  def sample
    session['hdf_field'] = params['hdf_field'] || session['hdf_field']
  end
  def evaluate

    if params['run_sample']
       session['run_sample']=params['run_sample'].to_i
       points = galaxy_data_points
      @frequencies =[0,0,0,0,0]
      (0...session['run_sample']).each do |i|
        type = points[i][2]
        @frequencies[type] += 1
        puts @frequencies.inspect, type,i
      end
      session['saved_sample_frequencies'] = @frequencies
    else
      @frequencies = session['saved_sample_frequencies']
    end
    @count = @frequencies[1]+@frequencies[2]+@frequencies[3]+@frequencies[4]
    @elliptical = @frequencies[1] * 100.0/@count
    @spiral = (@frequencies[2] + @frequencies[3]) * 100.0/@count
    @irregular = @frequencies[4]  * 100.0/@count
  end
  def evaluate_back
    @frequencies = session['saved_sample_frequencies']
    @count = @frequencies[1]+@frequencies[2]+@frequencies[3]+@frequencies[4]
    @elliptical = @frequencies[1] * 100.0/@count
    @spiral = (@frequencies[2] + @frequencies[3]) * 100.0/@count
    @irregular = @frequencies[4]  * 100.0/@count
    render 'evaluate'
  end

  def question
  end
  def answer
  end
  def uniform
  end
end
