window.progress_dot = (ctx, x,y, progress_state,is_current) ->
    ctx.beginPath()
    y = y + sine_roll(x)
    ctx.arc(x,y, 5, 0, 2*Math.PI, false )
    if progress_state == true
      if is_current
        ctx.fillStyle= '#d54c39'
      else
        ctx.fillStyle = '#d4c5ab'
    else
      ctx.fillStyle= '#ffffff'
    ctx.fill()
draw_spacing = 25
sine_roll = (pos) ->
  height = 7
  dots_per_cycle = 8
  px_per_cycle = dots_per_cycle * draw_spacing
  px_to_radians =  px_per_cycle /(2 * Math.PI)
  radians = pos/ px_to_radians
  sine = Math.sin(radians + 1.75)
  return height* sine  
jQuery ->      
  c = document.getElementById("progress_bar")
  window.c = c
  if c == null || c == undefined
  	return
  progress = JSON.parse($('#progress').html())
  if progress == undefined
    return 
  ctx = c.getContext("2d")
  boomerang_at =[2,10,13,22,29]
  boomerang_positions =[]
  first_dot_offset = 60
  draw_x = first_dot_offset
  
  draw_progress = (i) ->
    if boomerang_at.indexOf(i)>-1
      boomerang_positions.push(draw_x)
    else 
      progress_dot(ctx,draw_x, 30, progress[i], progress[0]==i)
    draw_x = draw_x + draw_spacing  

  icons=(num for num in [1..32])
  draw_progress icon for icon in icons
  #draw the boomerangs after the boomerang image loads
  img=new Image()
  img.onload = () ->
    for pos in boomerang_positions
      ctx.drawImage(img, pos-7, 13 + sine_roll(pos-7))
  path=$('#boomerang_path')
  img.src = path.html()  
  window.visited_signpost_styling(progress,boomerang_at)
  if !window.page('Main Itinerary')
    $('#main_itinerary .outside_sign').addClass('adjust_pullup_signs')

window.clickable = true
tab_unhover = () ->
  t = $('.tab_area')
  t.removeClass('tab_up_hover')
  t.removeClass('tab_down_hover')
  window.clickable = true

jQuery ->
  $('.tab_area').click ->
    if !window.clickable then return
    window.clickable = false 
    if $('.tab_area').hasClass('tab_down')
      $('.progress_slider').animate
        top: "-=254px"
        1000,
        () ->
          $('.tab_area').removeClass('tab_down')
          $('.tab_area').addClass('tab_up')
          tab_unhover()
    else
      $('.progress_slider').animate
        top: "+=254px"
        1000,
        () ->
          $('.tab_area').addClass('tab_down')
          $('.tab_area').removeClass('tab_up')
          tab_unhover()
  $('.tab_area').hover \
    (() ->
      t = $('.tab_area')
      if t.hasClass('tab_down')
        t.addClass('tab_down_hover')
      else
        t.addClass('tab_up_hover')),
    tab_unhover
jQuery ->
  c = document.getElementById("progress_canvas")
  if c == undefined || c == null
    return
  ctx = c.getContext("2d")
  window.horizontal_dot_range(ctx, 12, 380, 12)
  window.horizontal_dot_range(ctx, 570, 930, 12)
  window.horizontal_dots(ctx,268)
  window.vertical_dots(ctx, 12, 12, 272)
  window.vertical_dots(ctx, 927, 12, 272)
  
  