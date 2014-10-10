jQuery ->
  if window.page('Got Counts')
    galaxies = JSON.parse($('#galaxies').html().trim())
    $.ajax({url: json_data()}).done \
      (locations)->
        drawX locations[galaxy_id] for galaxy_id in galaxies  
jQuery ->
  if window.page('Irregulars')
    $('#show_me').click () ->
      $('.guess_yes_no').removeClass('hide')
      $('#show_me').addClass('hide')
      $('#astronomers_result').removeClass('hide')
      $('.click_to_show').addClass('hide')

      $('.next_disable_signpost').addClass('hide')
      $('.next_signpost').removeClass('hide')
$('#why_link').click () ->
  $('.left_of_galaxy_windowshade').animate
    height: '330px',\
    1000 
$('#hide_answer').click () ->
  $('.left_of_galaxy_windowshade').animate
    height: '44px',\
    1000
$('#galaxy_type_tag').click () ->
  window.left_slide_in()
$('#preview_north_slideout').click () ->
  $('#north_slide_in').removeClass('hide')
  $('#south_slide_in').addClass('hide')
  window.left_slide_in()
$('#preview_south_slideout').click () ->
  $('#north_slide_in').addClass('hide')
  $('#south_slide_in').removeClass('hide')
  window.left_slide_in()  




  
   