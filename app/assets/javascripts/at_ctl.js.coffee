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

#used in Angular version
window.show_modal = (id) ->
    msg_id = '#' + id
    $(msg_id).removeClass('hide')
    modal_frame = msg_id + " .position_modal"  
    top_dist = (676 -$(modal_frame).height())/2
    console.log $(modal_frame).height(), modal_frame
    $(modal_frame).css('top': top_dist)
    $(msg_id).animate
        opacity: 1, \
        200

jQuery -> 
    
  $('.close_style').click () ->
    $('.right_slide').animate
      left: '960px',\
      1000
    $('.left_slide').animate
      left: '-540px',\
      1000 

#used in Angular version       
  $('.close_modal_general').click (e) ->
    id = $(this).parents('.center_block').attr('id')
    close_selector = '#' + id
    $(close_selector).animate 
      opacity: 0,\
      100,\
      () ->
        $(close_selector).addClass('hide') 
  $('.field_selection_modal').click (e) ->
    $('.field_selection_modal').addClass('hide')
        
    