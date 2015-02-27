window.modal_close_fade = (id) ->
  close_selector = '#' + id
  $(close_selector).animate 
    opacity: 0,\
    100,\
    () ->
      $(close_selector).addClass('hide')
check_cross = (c,time) ->
  ctx = c[0].getContext('2d')
  ctx.strokeStyle = '#9c815b'
  ctx.moveTo(20,2)
  ctx.beginPath()
  ctx.lineWidth = 2
  i = 3;
  handle = setInterval (()->
      ctx.lineTo(22-i,i)
      i += 2
      ctx.stroke()
      if (i > 21)
        clearInterval(handle)), \
      time
check_fill = (id, time, biased='biased') -> 
  c = $('#' + id + ' .' + biased + ' canvas')
  window.test = c
  ctx = c[0].getContext('2d')
  ctx.beginPath()
  ctx.strokeStyle = '#9c815b'
  ctx.lineWidth = 2
  setTimeout (()->
    ctx.moveTo(2,2)
    i = 3; 
    handle = setInterval (()->
      ctx.lineTo(i,i)
      i += 2
      ctx.stroke()
      if (i > 21)
        clearInterval(handle)
        check_cross(c, time)), \
      time),\
    100
thats_right = (id,y) ->
  check_fill(id,20)
  msg_id = '#' + id + '_msg'
  $(msg_id).css('top': y-60).removeClass('hide')
  $(msg_id).animate
    opacity: 0, \
    2000,\
    () ->
      $(msg_id).addClass('hide').css('opacity', 1)
oops = (id) ->
  $("#oops").removeClass("hide")
  $('#oops').animate
    opacity: 1 , \
    100
  window.bias_method = id;
$('#oops_close').click ()->
  window.modal_close_fade('oops')
  check_fill(window.bias_method, 30)
jQuery ->
  return
 
  window.bias_check = 'unbiased'
  if $(this).hasClass('biased') then window.bias_check = 'biased' 
  row_id = $(this).parents('.bias_row').attr('id')
  if row_id == 'bias_computer' || row_id == 'bias_eyes_closed'
    window.modal_close_fade('oops')
    msg_id = '#' + row_id + '_' + window.bias_check
    $(msg_id).removeClass('hide')
    modal_frame = msg_id + " .position_modal" 
    top_dist = (676 -$(modal_frame).height())/2 -24
    console.log $(modal_frame).height(), modal_frame
    $(modal_frame).css('top': top_dist)
    $(msg_id).animate
      opacity: 1, \
      200
  else
    if $('#'+row_id).hasClass('clickable')
      if window.bias_check == 'biased'
        thats_right(row_id, e.pageY)
      else
        oops(row_id)
      $('#'+row_id).removeClass('clickable') 
  $('#' + row_id).addClass('row_checked')
  if $('.row_checked').length > 7
    $('.next_disable_signpost').addClass('hide')
    $('.next_signpost').removeClass('hide')    

  $('.close_modal').click (e) ->
    id = $(this).parents('.center_block').attr('id')
    window.modal_close_fade(id)
    check_id = id.replace(/_biased/,'').replace(/_unbiased/,'')
    if check_id == 'bias_eyes_closed'
      check_fill(check_id, 40)
    else 
      check_fill(check_id, 40, 'unbiased')
fast_check = (row) ->
  id = row.id
  if id == 'bias_computer'
    check_fill(id, 20, 'unbiased')
  else
    check_fill(id,20)
jQuery -> 
  if !window.page('Bias Compare') then return
  console.log 'on compare page', $('.compare_row').length
  fast_check row for row in $('.compare_row')
  setTimeout (() ->
    $("#bias_computer .compare_pct_row").css('background-color',   '#921821')
    $("#bias_computer .compare_method_row").css('background-color', '#921821')),
    1000

