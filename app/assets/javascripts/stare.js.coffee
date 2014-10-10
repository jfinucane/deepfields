$('.close_galaxies').on 'click', () ->
  $('.galaxy_overlay').addClass('hide')  

$('.galaxy_types_action').click () ->
  $('.galaxy_overlay').removeClass('hide')     
  $('.vocab_inner').addClass('hide')
  $('#vocab_position').addClass('hide')
