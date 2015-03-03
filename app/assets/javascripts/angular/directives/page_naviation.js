game.directive('pageForward', function() {
  return {
    scope: {
        forward: '=forward'
    }, 	
    template: "<a href='{{forward}}'> <div class='next_signpost next_position'></div></a>"
    }

})
game.directive('pageBack', function() {
  return {
    scope: {
        back: '=back'
    }, 	
    template: "<a href='{{back}}'> <div class='back back_position'></div></a>"
    }
})
game.directive('pageNav', function() {
  return {
    scope: {
    	forward: '=forward',
        back: '=back'
    }, 	
    template: "<a href='{{back}}'> <div class='back back_position'></div></a>" +
              "<a href='{{forward}}'> <div class='next_signpost next_position'></div></a>"
    }

})
game.directive('biasedCheckBox', function () {
    return {
        template: "<div class='bias_check_row'>"+
        "<div class='check_box biased'  ng-click='open({biased: true, image_ref: image})'>"+
        "<canvas class='check_canvas' width=22 height=22></canvas></div></div>"
    }
})
game.directive('unbiasedCheckBox', function () {
    return {
        template: "<div class='bias_check_row'>"+
        "<div class='check_box unbiased' ng-click='open({biased: false, image_ref: image})' >"+
        "<canvas class='check_canvas' width=22 height=22></canvas></div></div>"
    }
})
game.directive('biasCheck', ['modalService',function (modal) {
  return {
    scope: {
        'text': '=text',
        'tall': '=tall',
        'image': '=image',
        'open': '&onCheck'
    },
    template: "<div class='bias_row clickable' ng-class='{bias_tall_image: tall}' id='{{image}}'>"+
    "<div class='bias_wide_method_row'><div class='image'></div>"+
    "<div class='bias_row_text'>{{text}}</div></div>"+
    "<unbiased-check-box></unbiased-check-box><biased-check-box></biased-check-box></div>"
  }
}])