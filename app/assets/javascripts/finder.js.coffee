 
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




  
   