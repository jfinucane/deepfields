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