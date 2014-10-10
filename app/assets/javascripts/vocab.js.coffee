$('.vocab_close').click () ->
  $('#vocab_position').addClass('hide')
  $('.vocab_inner').addClass('hide')

window.open_modal = (elem_this) ->
  width =  $(elem_this).innerWidth()
  frame_x = $(elem_this).offset().left 
  frame_x = frame_x-24 #inside game_frame
  frame_y = $(elem_this).offset().top
  browser_width = $(window).width()
  if browser_width > 940  #
    frame_x = frame_x - (browser_width-940) /2 #remove margin outside game frame  
  console.log frame_x, width, frame_y, $('#vocab_position').height()
  x = frame_x + 32 + width
  y = frame_y - 70 - $('#vocab_position').height()
  if x > 580
    x = Math.max(frame_x - 370, 0)
  if y < 0
  	y= frame_y + 20 -24
  $('#vocab_position').css({top:y, left: x})
  $('#vocab_position').removeClass('hide')
  console.log 'thusly', x, y, frame_x, frame_y
window.pick_message = (elem_this) ->
  tag = $(elem_this).html().trim()
  tag = '#' + tag.replace /\s+/g, "_"
  tag = tag.replace /[\(\)\/]/g, "_" 
  tag = tag.replace /['"`.]/g, ''
  tag = tag.replace /-_/,''
  tag = tag.replace /measures/, 'measure'
  console.log tag
  $(tag).removeClass('hide')

$('.link_vocab').click (e) ->
  $('.vocab_inner').addClass('hide')
  window.pick_message(this)
  window.open_modal(this)

$(".alarm_inner").click ()->
  $('.alarm_inner').addClass('hide')
  $('#vocab_position').addClass('hide') 