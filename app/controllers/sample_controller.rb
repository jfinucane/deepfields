class SampleController < ApplicationController
  before_filter :check_for_field
  layout false
  def points(hdf='n')
   hdf = 'n' if hdf == nil
   file_name='lib/HDF' + hdf +'.yaml'
   field_name= 'hdf' + hdf
   YAML.load(File.read(file_name))[field_name]
  end	
  def index
    @percent = session['percent']
  end 
  def frequent
  	@galaxies = session['galaxies'] || []
    puts session
  	if @galaxies.count == 0
  		flash[:notice] = "Please sample some galaxies; zero is not enough. Click on Finder"
  		redirect_to lesson_index_path
  	end
  	@percent = session['percent']
  	@field = session['field']
  	@field_name = @field=='n' ? 'North' : 'South'
    pts = points(@field)
    all = pts.count
    @count =@galaxies.count 
    @freq=[]  
    (0..4).to_a.each do |trials|
        irregular= 0
        (0..@count-1).to_a.each do |test|
            galaxy= rand(all)
            if pts[galaxy][2]==4
            	irregular += 1
            end
        end    
        @freq[trials] = irregular*100.0/@count
    end
  end
  def go
    frequent   
  end
  def visualize
    frequent
  end
  def size
  end
end
