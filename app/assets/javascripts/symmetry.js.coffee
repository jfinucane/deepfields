window.plot = (galaxy_number) ->
  g = window.data_galaxies[galaxy_number]
  # g =[x_coordinate, y_coordinate, galaxy_type]
  diamond(g[0],g[1])
  window.my_sample_freq[g[2]] += 1
  console.log("REMOVE ME REMOVE ME TODO ")   
jQuery ->
  if !window.page('Evaluate') then return
  $('#plausible_buttons').click () ->
    console.log 'plausible button'
    $(this).addClass('hide')
    $('.next_disable_signpost').addClass('hide')
    $('.next_signpost').removeClass('hide')
    $('#plausible_explanation').removeClass('hide') 
  $("#plausible_yes").click () ->
    my_sample = parseInt($('#count').html())
    if my_sample > 39
      $('#right_right').removeClass('hide')
    else
      window.show_modal('implausible_sorry')       
  $("#plausible_no").click () ->
    my_sample = parseInt($('#count').html())
    if my_sample > 39
      $('#wrong_right').removeClass('hide')
    else
      window.show_modal('implausible_yes')
  $(".wtf").click () ->
    $('.center_block').addClass('hide')
    $('#implausible_yes').addClass('hide')
    $('#implausible_sorry').addClass('hide')
    $('#count').html('45')
    $('#elliptical').html('7.6%')
    $('#spiral').html('23.0%')
    $('#irregular').html('69.2%')
    $('#suggested_sample').removeClass('hide')
    $('#compare_question').css('display', 'none')
    $('#plausible_explanation').addClass('hide')