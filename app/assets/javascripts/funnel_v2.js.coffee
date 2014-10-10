jQuery ->
  if !window.page("Smallest") then return
  done_with_base = false
  $('.checkbox_col_2').click () -> 
    box  = "#" + this.id + ' .checked_box';
    if box == "#median_checkbox .checked_box"
      $('.variability_overlay_mean').addClass('hide')
      $('#mean_checkbox .checked_box').addClass('hide')
    if box == "#mean_checkbox .checked_box"
      $('.variability_overlay_median').addClass('hide')
      $('#median_checkbox .checked_box').addClass('hide')
    $(box).toggleClass('hide')
    if $('#median_checkbox .checked_box').hasClass('hide')
      $('.variability_overlay_median').addClass('hide')
    else
      $('.variability_overlay_median').removeClass('hide')

    if $('#mean_checkbox .checked_box').hasClass('hide')
      $('.variability_overlay_mean').addClass('hide')
    else
      $('.variability_overlay_mean').removeClass('hide')
    if !done_with_base
      done_with_base = true
      $('#best_add_text').removeClass('hide')
  $('#best_show_me').click () ->
    $('#best_first').addClass("hide")
    $('#best_add_text').addClass('hide')
    $('#best_base_text').addClass('hide')
    $('.best_try').removeClass('hide')
    $('.next_disable_signpost').addClass('hide')
    $('.next_signpost').removeClass('hide')
    $('.variability_overlay_region').removeClass('hide')

jQuery ->
  if !window.page("Magnify") then return
  floating_lines = (c, ctx, t) -> 
    c.width = c.width
    ctx.beginPath()
    ctx.strokeStyle = '#008ec7'
    ctx.lineWidth=4
    ctx.moveTo(0,20 + t )
    ctx.lineTo(50,20)
    ctx.stroke()
    ctx.moveTo(0,87 + t)
    ctx.lineTo(50,379)
    ctx.stroke()
  c=document.getElementById("floating_lines");
  ctx=c.getContext("2d");
  floating_lines(c, ctx, 0)
  $("#magnifier_glass").draggable \
    containment: "#magnifier_container",
    drag: ()->
      t = $(this).position().top
      $('#min_max_graphic').css('top', (30 - 5.70*t)+'px')
      floating_lines(c, ctx, t)
      if t > 84
        $('.next_disable_signpost').addClass('hide')
        $('.next_signpost').removeClass('hide')

