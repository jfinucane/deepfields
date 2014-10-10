window.border_dot = (ctx, x,y) -> 
  ctx.beginPath()
  ctx.arc(x,y, 3, 0, 2*Math.PI, false )
  ctx.fillStyle= '#806045'
  ctx.fill()
window.horizontal_dot_range = (ctx, i_start, i_stop, j) ->
  i = i_start
  while i < i_stop
    window.border_dot(ctx,i,j)
    i = i + 15
window.horizontal_dots = (ctx, j) ->
  window.horizontal_dot_range(ctx, 12, 940, j)
  
window.vertical_dots = (ctx, i, j_start, j_stop) ->
  j= j_start 
  while j <= j_stop
    window.border_dot(ctx, i,j)
    j= j + 15


jQuery -> 
  if !window.page('Main Itinerary') then return
  $('.progress_slider').addClass('hide')

  c = document.getElementById("border_canvas")
  ctx = c.getContext("2d")
 
  horizontal_dots(ctx, 12)
  horizontal_dots(ctx, 657)
  vertical_dots(ctx, 12, 12, 657)
  vertical_dots(ctx, 927, 12, 657) 
  