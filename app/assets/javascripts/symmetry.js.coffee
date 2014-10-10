window.plot = (galaxy_number) ->
  g = window.data_galaxies[galaxy_number]
  # g =[x_coordinate, y_coordinate, galaxy_type]
  diamond(g[0],g[1])
  window.my_sample_freq[g[2]] += 1
jQuery ->
  if !window.page('Sample') then return
  field = $('#field').html().trim()
  console.log 'field', field
  load_field()
  $('#best_region').click ->
    c=document.getElementById("StarDraw");
    c.width = c.width
    window.my_sample_freq=[0,0,0,0,0]
    sample_estimate = parseInt($('#make_estimate').val().trim())
    window.run_sample = sample_estimate
    if isNaN(sample_estimate) then sample_estimate = 0
    if sample_estimate == 0 || sample_estimate > 300
      $('.bad_sample').removeClass('hide')
    else
      $('.next_allowed').removeClass('hide')
      $('.next_disable_signpost').addClass('hide')
      $('.next_signpost').removeClass('hide')	
      used =[]
      n=window.data_galaxies.length
      while used.length < sample_estimate
        r = parseInt(n*Math.random())
        if used.indexOf(r) == -1
          used[used.length] = r
      plot galaxy for galaxy in used
  $('.show_plot').click ->
    if window.run_sample > 50
      $('.sample_too_big').removeClass('hide')
    else
      you_got_it()
  $('.bad_sample').click ->
    $('.bad_sample').addClass('hide')
  $('.sample_too_big').click ->
    $('.sample_too_big').addClass('hide')    
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