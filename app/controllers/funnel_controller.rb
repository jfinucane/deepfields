class FunnelController < ApplicationController

  layout false
  def magnify
  end
  def smallest
  end
  def best_region
  end
  def compare_astronomer     
  end
  def you_got_it
  end
  def you_got_it_back
  end
  def you_versus
    return
    puts session.inspect
    @field=session["field"]
    sample = session['run_sample']
    @run_sample = Integer(sample)
    @count = @run_sample
    types = load_summary(@field)
    range=types.length
    @elliptical=0
    @spiral=0
    @irregular=0
    (1..@run_sample).each do |i|
      sample= rand(range)
      puts types[sample]
      case types[sample]
      when "1"
        @elliptical += 1
      when "2"
        @spiral += 1
      when "3"
        @spiral += 1
      else
        @irregular += 1
      end
    end
    @elliptical = Integer(@elliptical*100.0/@run_sample)
    @spiral = Integer(@spiral*100.0/@run_sample)
    @irregular = Integer(@irregular*100.0/@run_sample)
  end
end
