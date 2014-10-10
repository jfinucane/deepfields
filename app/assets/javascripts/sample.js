function get_count(){
    return parseInt($('#count').text())
}
jQuery(document).ready(function(){
  if (!window.page("Visualize")) {return}
  $('.checkbox_col_2').click(function(e){
    sample_draw(window.freq)
    var box  = "#" + this.id + ' .checked_box';
    $(box).toggleClass('hide')
    if (box == '#median_checkbox .checked_box') {
      $('#mean_checkbox .checked_box').addClass('hide');
    }
    if (box == '#mean_checkbox .checked_box') {
      $('#median_checkbox .checked_box').addClass('hide')
    }
    if(!$('#median_checkbox .checked_box').hasClass('hide')){
      red_diamond(ctx_var(), window.freq[2],102, 7)
    }
    if(!$('#mean_checkbox .checked_box').hasClass('hide')){
       sum = 0
       for(i=0; i<5; i++){sum += window.freq[i]}
       green_circle(ctx_var(), Math.floor(sum/5), 105,9)
    } 
  });
  $('#show_plot_button').click(function(){
    $('.show_plot').removeClass('hide')
    $('#show_plot_elements').addClass('hide')
    $('.next_disable_signpost').addClass('hide')
  })

  $.ajax({
      url: json_data()
      }).done(function(result){ 
          window.data_galaxies = result
          window.freq = frequencies(get_count())
          sample_draw(window.freq)
      })

    $("#recalculate").click(function(){
        $('.checked_box').addClass('hide')
        window.freq = frequencies(get_count())
        window.sample_draw(window.freq)
    }) 
})
