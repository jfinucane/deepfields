window.symmetry_field = (field) ->
  a = $('#symmetry_link').html().trim() 
  a_link = a + '?hdf_field=' + field
  window.location = a_link 

jQuery ->
  #if (!page('Enter')) 
  #  return

  $('#preview_north').click () ->
    window.right_slide_in()
  $('#preview_south').click () ->
    window.left_slide_in()
  $('#left_field').click () ->
    $('#north_big_field').removeClass('hide')
    $('#north_big_field').animate
      opacity: 1, \
      100
  close_north_field = () ->
    $('#north_big_field').removeClass('hide')
    $('#north_big_field').animate
      opacity: 0, 
      100,
      ()-> 
        $('#north_big_field').addClass('hide')
  $('#big_north_image .close').click () ->
    close_north_field()
  $('#right_field').click () ->
    $('#south_big_field').removeClass('hide')
    $('#south_big_field').animate
      opacity: 1, \
      0,
  close_south_field = ()->
    $('#south_big_field').animate
      opacity: 0, 
      0,
      ()-> 
        $('#south_big_field').addClass('hide')
  $('#big_south_image .close').click () ->
    close_south_field()
   $('.center_block').click () ->
     close_south_field()
     close_north_field()
   $('#hdfs_big_image').click () ->
     return false
   $('#hdfn_big_image').click () ->
     return false
   $('.checkbox').click () ->
     id= '#' + this.id
     if $(id).hasClass('box_checked')
       $(id).removeClass('box_checked')
       $('.field_' + id.substring(9)).addClass('hide')
     else
       $(id).addClass('box_checked')
       $('.field_' + id.substring(9)).removeClass('hide')
  $('.field_tags').hover \
   (()-> $('#' + this.id + ' .green_label').removeClass('hide')),
   (()-> $('.green_label').addClass('hide'))

jQuery ->
  if !window.page('Classic') then return
  $('.close').on 'click', () ->
    $('#overlay_background').addClass('hide')
    