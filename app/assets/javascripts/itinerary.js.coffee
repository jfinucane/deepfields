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


