def file_load(direction='n')
	data_file = File.open("/Users/jamesfinucane/stars/galaxy/app/models/hdfdb#{direction}.txt",'r')
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
    #FACTORS from OLD SCHOOL REPO
    xoffn = 213.1762
    xsn =6.438
    yoffn=2049.0019
    ysn= -6.4219
    xoffs=1934.6
    xss=6.43
    yoffs=3082.6
    yss=-6.4177
    #USE THE LARGER IMAGE FROM THE REPO 
    # pixel_ratio = new_size/old_size  
    x_pixel_ratio = 431.0/272.0#434.0/272.0
    y_pixel_ratio = 443.0/281.0#447.0/281.0
    (0..12).each{|g| puts sorted[g].inspect}
    neater = sorted.map{|g| 
        x=g[0] 
        y=g[1] 
        [
        x_pixel_ratio * (direction == 'n' ? (x-xoffn)/xsn : (x-xoffs)/xss),
        y_pixel_ratio * (direction == 'n' ? (y-yoffn)/ysn : (y-yoffs)/yss), 
        g[2]
        ]
    }
    selected = neater.select{|n| (n[0] > 0 && n[0] < (x_pixel_ratio*270)) &&
                      (n[1] > 0 && n[1] < (y_pixel_ratio*281))
                  }       
    #eyeball adjustment for nonlinearity
    #adds a field to data structure for used in js
    if direction=='n'              
      selected.map{|n| [n[0]**0.999, n[1]**0.999, n[2], 0]} 
    else
      selected 
    end 
end
load_yaml 'n', clean_array('n')
load_yaml 's', clean_array('s')

