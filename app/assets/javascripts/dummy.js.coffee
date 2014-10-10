window.static_data = (sample_size) ->
# lo, hi, median, mean
 (sample_size==5) &&  [59, 100, 80,84] ||
 (sample_size==10) && [59, 80, 69, 72] ||
 (sample_size==15) && [46, 80, 66, 67] ||
 (sample_size==20) && [54, 85, 75, 73] ||
 (sample_size==25) && [56, 75, 67, 67] ||
 (sample_size==30) && [68, 83, 78, 77] ||
 (sample_size==35) && [65, 72, 68, 68] ||
 (sample_size==40) && [57, 67, 63, 63] ||
 (sample_size==45) && [62, 74, 71, 66] ||
 (sample_size==50) && [67, 77, 70, 70] ||
 (sample_size==55) && [66, 75, 68, 69] ||
 (sample_size==60) && [65, 70, 66, 65]

window.dummy_frequencies = (sample_size) ->
  raw = window.static_data(sample_size)
  total = 5 * raw[3] #mean
  adjust = total - raw[0] - raw[1] - raw[2] - raw[3]
  if adjust > raw[3]
  	[raw[0], raw[2],raw[2], adjust, raw[1]]
  else
  	[raw[0], adjust, raw[2],raw[2], raw[1]]
  
window.y_rel = (sample_size) ->
  (sample_size*21)/5+30    

window.more_frequencies = (get_count_var,trials, dummy = false) ->	 
   if dummy 
   	 freq = dummy_frequencies(get_count_var)
   else
     pts = window.data_galaxies.length
     freq = Array(5)
     for trial in [0..trials-1] 
        irregular = 0
        for i in [0..get_count_var-1]
          sample_id = Math.floor(Math.random()*pts)
          if (window.data_galaxies[sample_id][2] == 4)  then irregular +=1
        freq[trial] =irregular*100.0/get_count_var
   for i in [0 .. trials-1]
     if freq[i] < 40 then freq[i] = 40
     freq[i] = (freq[i]-40) *5.2 + 75
   freq.sort (a,b)->
     a-b
rescale_reasonable = (your_reasonable_freq, freq) ->
  x = your_reasonable_freq[freq]
  #remove old display units
  x =  (x-12)/4.88
  if x < 40 then x = 40
  x= 73 + 5.15*(x-40)
  your_reasonable_freq[freq] = x
window.dummy_draw = () ->
    c=document.getElementById("live_samples")
    c.width = c.width #forcing redraw
    ctx=c.getContext("2d");
    window.my_sample_size = $('#your_sample_field').html().trim() * 1
    reasonable_field_size = 0
    if $('#reasonable_field_size') != undefined && $('#reasonable_field_size').html() != undefined
      reasonable_field_size = parseInt($('#reasonable_field_size').html().trim())
      
    if reasonable_field_size > 0
      your_reasonable_freq = JSON.parse($('#your_reasonable_freq').html())
      for freq in [0..4]
        rescale_reasonable(your_reasonable_freq, freq)
      window.draw_statistics_line(ctx, your_reasonable_freq, y_rel(reasonable_field_size), '#0f0')
    window.draw_statistics_line(ctx, window.your_persistent_freq, y_rel(window.my_sample_size), '#f0f')
    for sample_size in [5..60] by 5
      if sample_size != window.my_sample_size && sample_size != reasonable_field_size
        freq = more_frequencies(sample_size,5, true)
        draw_statistics_line(ctx, freq, y_rel(sample_size), '#000' )






