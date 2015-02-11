game.directive('navButton', function() {
	return {
		scope: {text: '=text'},
		template: "<div class= 'button_outside'>"+ 
		"<div class='button_inside'>"+
		" <div class='button_text'>{{text}}</div>" + 
		"</div></div>"

	}
})

//mysteriously doesn't work TODO upgrade to 1.4???
game.directive('navButtonClick', function() {
	return {
		scope: {text: '=text'},
		template: 
        "<div ng-click='modal.open(&quot;{{text}}&quot;)' class='ng-isolate-scope'>"+
		"<div class= 'button_outside'> "+
		
		"<div class='button_inside'>"+
		" <div class='button_text'>{{text}}xxx</div>" + 
		"</div></div></div>"

	}
})
