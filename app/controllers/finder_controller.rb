class FinderController < ApplicationController
  require 'json'
  layout false
  def select 
  end
  def hdf
    respond_to do |format|
      #Add new fields here
      n = File.read('lib/HDFn.yaml')
      s = File.read('lib/HDFs.yaml')
      format.json { render json: YAML.load(n + s).to_json, layout:false}
    end
  end
  def got_counts
  end
  def irregulars
  end
  def find_out
  end
  def next
  end
end