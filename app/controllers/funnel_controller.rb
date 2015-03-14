class FunnelController < ApplicationController

  layout false
  def magnify
  end
  def smallest
  end
  def best_region
    puts 'SESSION',session.inspect
    @sample_size = session['sample_size']
    @your_persistent_freq = JSON.parse(session['your_persistent_freq_sample'])
  end
  def compare_astronomer
    if params['run_sample']
      session['run_sample'] = params['run_sample'].to_i
    end
    @reasonable = session['run_sample']
    puts session.inspect      
  end
  def you_got_it
    @sample_size = session['sample_size']

    if params['run_sample']
      session['run_sample'] = params['run_sample'].to_i
    end
    @your_persistent_freq = JSON.parse(session['your_persistent_freq_sample'])
    session['frequencies'] = params['your_reasonable_freq'] || session['frequencies']
    @your_reasonable_freq = session['frequencies']
    @reasonable = session['run_sample']
  end
  def you_got_it_back
    @sample_size = session['sample_size']
    @your_persistent_freq = JSON.parse(session['your_persistent_freq_sample'])

    @your_reasonable_freq = session['frequencies']
    @reasonable = session['run_sample']
    render 'you_got_it'
  end
  def you_versus
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
