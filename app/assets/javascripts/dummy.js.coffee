window.y_rel = (sample_size) ->
  (sample_size*21)/5+30    
window.more_frequencies = (get_count_var,trials, dummy = false) ->	 
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






