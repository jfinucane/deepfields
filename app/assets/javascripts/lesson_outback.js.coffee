jQuery ->
  
  $('#meet_north').click () ->
    $('.outer_frame_video').addClass('hide') 
    $('.show_north').removeClass('hide')
  $('#close_meet_north').click () ->
    $('.show_north').addClass('hide') 
    $('.outer_frame_video').removeClass('hide') 
  $('#meet_south').click () ->
    $('.show_south').removeClass('hide')
    $('.outer_frame_video').addClass('hide')
  $('#close_meet_south').click () ->
    $('.show_south').addClass('hide')
    $('.outer_frame_video').removeClass('hide')


