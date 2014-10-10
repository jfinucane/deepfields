window.vertical_red = ()->
  c=document.getElementById("live_samples");
  ctx=c.getContext("2d");
  ctx.beginPath()
  ctx.strokeStyle="#644c3f";
  ctx.lineWidth =3;
  ctx.moveTo(50,0)
  ctx.lineTo(50,300)
  ctx.stroke()
heavy_bar = (ctx,x,y) ->
  x = Math.floor(x);
  y = Math.floor(y);
  ctx.moveTo(x,y-9);
  ctx.lineTo(x,y+9);
  ctx.stroke()
window.heavy_line = (id, color, x1, x2, y) ->
  c=document.getElementById(id)
  ctx=c.getContext("2d")
  ctx.beginPath()
  ctx.strokeStyle=color
  ctx.lineWidth=3
  ctx.moveTo(x1,y)
  ctx.lineTo(x2,y)
  ctx.stroke()
  heavy_bar(ctx,x1,y)
  heavy_bar(ctx,x2,y)
window.you_got_it =  () ->
  sample_path = $('#you_got_it_path').html().trim()  
  $form = $("<form action='" + sample_path+"' method='post'></form>")
  $form.append("<input type='text' name='run_sample' value='" + window.run_sample + "'/>")
  load_field()
  $form.append("<input type='text' name='your_reasonable_freq' value ='" + JSON.stringify(window.frequencies(window.run_sample)) + "'/>")
  $('#next_compare_astronomer').append($form)
  $form.submit()

window.show_modal = (id) ->
    msg_id = '#' + id
    $(msg_id).removeClass('hide')
    modal_frame = msg_id + " .position_modal"  
    top_dist = (676 -$(modal_frame).height())/2
    console.log $(modal_frame).height(), modal_frame
    $(modal_frame).css('top': top_dist)
    $(msg_id).animate
        opacity: 1, \
        200
rescale = (freq) ->
  x = window.your_persistent_freq[freq]
  #remove old display units
  x =  (x-12)/4.88
  console.log 'percentage that were persisted', x
  if x < 40 then x = 40
  x= 73 + 5.15*(x-40)
  window.your_persistent_freq[freq] = x
 
jQuery -> 
  if !window.page('Best Region') && !window.page('You Got It') then return   
  window.your_persistent_freq = JSON.parse($('#your_persistent_freq').html().trim()) 
  rescale freq for freq in [0..4]

  $.ajax( url: json_data() ).done (result) ->
    window.data_galaxies= result
    window.dummy_draw()  
    heavy_line('green_sample', '#0f0',2,97, 9)
    heavy_line('purple_sample', '#f0f',2,97, 9)
  $('#best_region').click () ->
    sample_estimate = parseInt($('#make_estimate').val())
    if isNaN(sample_estimate) then sample_estimate = 0
    console.log 'best here',sample_estimate,'x'
    if sample_estimate > 50 || sample_estimate < 40
      window.show_modal("wrong_sample_estimate")
    else
      window.run_sample = sample_estimate
      window.you_got_it()
    $('#show_estimate').val(window.run_sample)
    return false
  $('#go_ahead').click () ->
    window.run_sample = 45
    window.you_got_it()  
  window.redraw = false

  $('.checkbox_col_2').click () ->
    box  = "#" + this.id + ' .checked_box';
    $(box).toggleClass('hide')
    window.redraw = true
    window.dummy_draw()
    if this.id == 'median_checkbox'
      if !$('#median_checkbox .checked_box').hasClass('hide')
        red_median()
      $('#mean_checkbox .checked_box').addClass("hide")

    if this.id == 'mean_checkbox'
      if !$('#mean_checkbox .checked_box').hasClass('hide')
        green_mean()
      $('#median_checkbox .checked_box').addClass("hide")

  c=document.getElementById("live_samples");
  ctx=c.getContext("2d") 
  
  red_median = () ->
    connect_line(ctx, 0.0)
    for i in [5..60] by 5
      ctx.beginPath()
      y=y_rel(i)
      if i == window.my_sample_size
        freq = window.your_persistent_freq
      else
        freq=more_frequencies(i, 5, true)
      median = Math.floor(freq[2])
      red_diamond(ctx, median, y, 5) 
      connect_line(ctx, median,y)

  green_mean = () ->
    connect_line(ctx, 0,0)
    for i in [5..60] by 5
       ctx.beginPath()
       y=y_rel(i)
       if i == window.my_sample_size
         freq = window.your_persistent_freq
       else
         freq=more_frequencies(i, 5, true)
       mean = Math.floor((freq[0]+freq[1]+freq[2]+freq[3]+freq[4])/5)
       green_circle(ctx, mean, y, 5)
       connect_line(ctx, mean ,y) 
    





