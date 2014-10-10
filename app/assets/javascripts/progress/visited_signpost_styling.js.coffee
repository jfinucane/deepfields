# Visiting the page corresponding to the last dot 
# before the boomerang is what defines whether a signpost is 'done'

# crocodile position is the first undone signpost, 
window.visited_signpost_styling = (progress, boomerang_at) ->
  crocodile_positioned = false;
  console.log progress,boomerang_at
  up_to_last = boomerang_at.length - 1
  for i in [0..up_to_last]
    key_dot = boomerang_at[i]-1
    if progress[key_dot]
      $('.boxy'+(i+1) + ' .outside_sign').addClass('itin_visited')
  $('.bar').addClass('hide')
  $('.game_section').addClass('hide')
  if window.page('Main Itinerary')
    signpost = $('#next_signpost').html().trim()
    if signpost != ''
      $(signpost + ' .bar').removeClass('hide')
      $('.notice ' + signpost).removeClass('hide')