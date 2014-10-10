jQuery ->
  
  $('#meet_the_deep_fields').click () ->
    $('.outback_meet_hdfs').removeClass('hide')  

  $('#close_meet_hdfs').click () ->
    $('.outback_meet_hdfs').addClass('hide')    

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
  if !window.page('Outback') then return
  $('#secrets_modal').click () ->
    $('.about_deep').removeClass('hide')
  $('.close').click () ->
    $('.about_deep').addClass('hide')  