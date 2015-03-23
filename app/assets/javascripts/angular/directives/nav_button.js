game.directive('navButton', function() {
	return {
		scope: {button_text: '=text'},
		template: "<div class= 'button_outside'><div class='button_inside'>"+
		"<div class='button_text'>{{button_text}}</div>" +
		"</div></div>"

	}
})

game.directive('linkButton', function() {
	return {
		scope: {button_text: '=text', link_href: '=link'},
		template: "<a href='{{link_href}}'>"+ 
		 "<div class= 'button_outside'><div class='button_inside'>"+
		"<div class='button_text'>{{button_text}}</div>" +
		"</div></div></a>"
	}
})

game.directive('linkedButton', function() {
	return {
		transclude: true,
		scope: {link_href: '=link'},
		template: "<a href='{{link_href}}'>"+ 
		 "<div class= 'button_outside'><div class='button_inside'>"+
		"<div class='button_text'><ng-transclude></ng-transclude></div>" +
		"</div></div></a>"
	}
})

game.directive('actionButton', function() {
	return {
		transclude: true,

		scope: { action: '=action'},
		template:  "<div class= 'button_outside' ng-click='action()'>"+
		"<div class='button_inside'>"+
		"<div class='button_text'>{{button_text}}"+
		"<ng-transclude></ng-transclude>" +
		"</div></div></div>"
	}
})


game.directive('modalButton', function() {
	return {
    transclude: true,
    scope: {
        'open': '&onOpen',
        'idText': '=modalIs'
    },
    template: "<nav-button text=idText ng-click=open({modal_id:idText})></nav-button>"
    }
})