
def scaled(scale, min, max, value)
=begin
 range = max - min 
 adjustment = scale /range
 offset = value - min
 value = offset * adjustment
 value.round.to_i
=end

  (value-min)/6.0
end





def file_load(direction='n')
	data_file = File.open("/Users/jamesfinucane/stars/galaxy/app/models/hdfdbn.txt",'r')
	data = data_file.read.split("\n")
	puts data.count
	points = data.map{|d| 
       values=d.split(' ')
       values.shift if values[0] == ' '
       [values[0].to_f, values[1].to_f, values[4].to_i]
	   }
end


def load_yaml direction, clean_array
    data_store = File.open("lib/HDF#{direction}.yaml", 'w')
    data_store.puts  "hdf#{direction}:"
    clean_array.each{|g| 
      data_store.puts "    -"
      data_store.puts "         - #{g[0]}"
      data_store.puts "         - #{g[1]}"
      data_store.puts "         - #{g[2]}"
    }
    data_store.close
end

def clean_array(direction='n')
    @result = file_load(direction)
    puts @result.count
   


    sorted = @result.sort{|a,b| a[0].to_i <=> b[0].to_i}
    x_min = sorted[0][0]
    x_max = sorted[-1][0]


    #sorted = @result.sort{|a,b| a[1].to_i <=> b[1].to_i}
    y_min = sorted[0][1]
    y_max = sorted[-1][1]

    #puts "#{x_min}, #{x_max}, #{y_min}, #{y_max}"
    x_scale = 434
    y_scale = 447

 
     xoffn = 213.1762
     xsn =6.438
     yoffn=2049.0019
     ysn= -6.4219
     xoffs=1934.6
     xss=6.43
     yoffs=3082.6
     yss=-6.4177
     xpixel=1#.59
     ypixel=1#.55

    (0..12).each{|g| puts sorted[g].inspect}

    neater = sorted.map{|g| 
        x=g[0] 
        y=g[1] 
        [
        (x-213)/xsn,#xpixel * (x-xoffn)/xsn,
        (y-2049)/ysn, #-ypixel * (y-yoffn)/ysn,
        g[2]
        ]
    }

    (0..10).each{|g| puts neater[g].inspect}

    neater.select{|n| n[0] > 0 && n[0] < 270 &&
                      n[1] > 0 && n[1] < 281}
end

load_yaml 'n', clean_array('n')
#load_yaml 's', clean_array('s')

