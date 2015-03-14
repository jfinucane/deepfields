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