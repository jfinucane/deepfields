jQuery ->
  if !window.page('Question') then return
  turn_around = () ->
    $('#facing_left').addClass('hide')
    $('#facing_right').removeClass('hide')
  mv_animate = (elem_id, duration, x, y) ->
    $(elem_id).animate
      top: y
      left: x,\
      duration
  mv = (elem_id, start, duration, x, y) ->
    setTimeout \
      (()-> mv_animate(elem_id, duration, x, y)),
      start
  y_bounce = (start, duration,dist) ->
    mv('.hst_bounce', start, duration/2, '-=0px', '+' + dist )
    mv('.hst_bounce', start+duration/2,duration/2, '-=0px', '-' + dist)
  x_bounce = (start, duration,dist) -> 
    mv('.jeep_left', start, duration/2, '+' + dist, '-=0px')
    mv('.jeep_left', start+duration/2,duration/2, '-' + dist, '-=0px')

  mv('.jeep_left', 0, 500, '-=200px', '-=0px')
  mv('.hst_left_facing',  700, 500, '-=0px', '+=520px')
  x_bounce(500, 200, '=12px')
  y_bounce(1200, 100, '=10px')
  y_bounce(1300, 250, '=5px')

  $('#secrets_button').on 'click', () ->
    turn_around()
    mv('.facing_right', 500, 150, '-=40px', '+=0px')
    mv('.facing_right', 700, 800, '+=300px', '+=0px')
    setTimeout \
      (()-> 
        window.location = $('#passenger_path').html().trim()
        false),
      1500

jQuery ->
  if !window.page('Different') then return

  $('#secrets_modal').on 'click', ()->
    $('.about_deep').removeClass('hide')

  $('.outer_border_secret .close').on 'click', ()->
    $('.about_deep').addClass('hide')


