function hdf(){ return $('#hdf_field').text()}
jQuery(document).ready(function(){
  if (window.page('Select')==false) {
      $('.show_number').click(function(){
         $('.irregular_pct').removeClass('hide');
         $('.show_number').addClass('hide');
      })
      return
    }
  galaxy_counts = [0,0,0,0,0]
  galaxies_counted = []
  load_field() 
  var x,y,data, galaxies
  function adjust_frame(){
    correction = 10;
    window.big_picture = $(window).width()
    // MAGIC NUMBER appears to adjust for 10px border?
    if (big_picture > 960) {
      correction = (big_picture - 940)/2
    }
    return correction
  }
  image_pos = $('#starfield').position();
  $(document).mousemove(function(e){
      x = e.pageX - image_pos.left
      y = e.pageY - image_pos.top
   }); 
  $('.hdf_field').click(function(e){
      $('#hdf_field').text(this.name);
      refresh()
  }); 
  $('#starfield').click(function(e){
        offset= this.getBoundingClientRect()
        $('#status').html('')
        x_adjust = x - adjust_frame()
        y_adjust = y - 32 // offset.top
        g = closest(x_adjust,y_adjust)
        plotg(g[0])
        show_counts(galaxy_counts)
  });
  $('.got_counts').click(function(e){
     var path = $('#finder_get_counts').html().trim()
     $form = $("<form action='" + path +"' method='post'></form>")
     gc=[]
     for (var object in galaxies_counted){
        gc.push(galaxies_counted[object])
     }
     if(gc.length==0){
       $('#choose_at_least_one').removeClass('hide')
       window.open_modal('.got_counts .button_text')
       return
     }
     $form.append("<input type='text' name='galaxies' value='" + JSON.stringify(gc) + "'/>")
     $form.append("<input type='text' name='your_persistent_freq_sample' value ='" + JSON.stringify(window.frequencies(gc.length)) + "'/>")
     $form.append("<input type='text' name='hdf_field' value='" + hdf() + "'/>") 
     //Firefox requires form to be in the document somewhere
     $('#result_form').append($form)
     $form.submit()
  })
})
$('.field_selection_modal').click(function(e){
  $('.field_selection_modal').addClass('hide')
});  