game.service('pullup', function(){
	var clickable = true;
    var hover_leave = function () {
    	t = $('.tab_area')
        t.removeClass('tab_up_hover')
        t.removeClass('tab_down_hover')
        clickable = true
    } 
    var hover_enter = function () {
        console.log('hoveringofff')
        t = $('.tab_area')
        if (t.hasClass('tab_down')) { 
            t.addClass('tab_down_hover')
        }
        else {
            t.addClass('tab_up_hover') 
        }
    }
    var toggle_up = function () {
        $('.tab_area').removeClass('tab_down')
        $('.tab_area').addClass('tab_up')
        hover_leave()
    }
    var toggle_down = function () {
        $('.tab_area').addClass('tab_down')
        $('.tab_area').removeClass('tab_up')
        hover_leave()
    }
    this.tab_enter = function() { hover_enter() }
    this.tab_leave = function() { hover_leave() }
    this.pullup_move = function () {
      if (!clickable) {return}
      clickable = false
      if ($('.tab_area').hasClass('tab_down')) {
        $('.progress_slider').animate( {top: "-=254px"}, 1000, toggle_up)
      }
      else {
        $('.progress_slider').animate ( {top: "+=254px"}, 1000, toggle_down)
      }
    }
    this.toggle_down = function() {
        if (!$('.tab_area').hasClass('tab_down')) {
          $('.progress_slider').animate( {top: "+=254px"}, 1000, toggle_down)
        }
    }
})