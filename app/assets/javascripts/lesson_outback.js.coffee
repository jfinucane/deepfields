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

  $('.field_block').hover \
    (()->
      id = this.id
      $('#plain_'+id).addClass('hide')
      $('#hover_'+id).removeClass('hide')),
    (()->
      id = this.id
      $('#hover_'+id).addClass('hide')
      $('#plain_'+id).removeClass('hide'))

