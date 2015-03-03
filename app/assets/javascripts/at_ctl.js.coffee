window.DOTS = {RED: '#a03229', RED_BORDER: '#5e0016', 'GREEN': '#00aa4e', \
 'GREEN_CONNECTOR':'#007033', 'RED_CONNECTOR': '#5e0016'}
window.json_data = () -> 
  $('#finder_hdf').html().split('"')[1]
window.GRAPH_LEFT_MARGIN =74;
window.page = (page_type) ->
  p= $('#page').html()
  if (p != undefined)
    result = p.trim() == page_type
  else
    result = false
  result
window.left_slide_in = () ->
  $('.left_slide').animate
    left: '-20px',\
    1000
window.right_slide_in = () ->
  $('.right_slide').animate
    left: '430px',\
    1000  
open_travelogue = () ->
  path = $('#travelogue_path').html().trim()
  pdf = window.open(path, 'Travelogue', "width=670,height=850,toolbar=none")
  pdf.focus()
$('.travelogue_position').on 'click', () ->
  open_travelogue()
$('#travelogue_pdf_link').on 'click', () ->
  open_travelogue()
jQuery -> 
  $('#overlay_btn').click () ->
    o=$('#overlay')
    if o.hasClass('hide')
      o.removeClass('hide')
    else
      o.addClass('hide')     
  $('.close_style').click () ->
    $('.right_slide').animate
      left: '960px',\
      1000
    $('.left_slide').animate
      left: '-540px',\
      1000  
  $('.close_modal_general').click (e) ->
    id = $(this).parents('.center_block').attr('id')
    close_selector = '#' + id
    $(close_selector).animate 
      opacity: 0,\
      100,\
      () ->
        $(close_selector).addClass('hide') 
    