class LessonController < ApplicationController

require 'pry'
require 'json'
	def index
       location ={}
       location['north'] = YAML.load(File.read('lib/HDFn.yaml'))['hdfn']
       location['south'] = YAML.load(File.read('lib/HDFs.yaml'))['hdfs']
       @size = 5
	end
	def test
       respond_to do |format|
       	  sample = [[20,20], [40,40]]
          format.json { render json: sample.to_json, layout: false}
      end
    end 

    def hdfn
			points = YAML.load(File.read('lib/HDFn.yaml'))['hdfn']
			points = points.select{|p| p[2] == 1}
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

    def closest
      puts params.inspect
      points = {x: params['x'].to_i-params['left'].to_i,
       y: params['y'].to_i-params['top'].to_i}
      respond_to do |format|
        format.json { render json:points, layout: false}
      end
    end

end
