game.directive('vocab', function() {
	return {
	  transclude: true,
	  template: '<span class="link link_vocab"><ng-transclude></ng-transclude></span>'
	}
})
game.directive('phrase', function() {
	return {
	  transclude: true,
	  scope: {
	  	definition_method: '=define',
	    word: '=word'
	 },
	  template: '<vocab ng-click=definition_method(word,$event)>' + 
	  '<ng-transclude></ng-transclude></vocab>'
	}
})
game.directive('explanations', function() {
	return {	 
	  templateUrl: '/partials/definitions.html'
	}
})
game.directive('closeDefinition', function() {
	return {
		scope: {close_method: '=close'},
		template: '<div class="fa fa-times vocab_close" ng-click="close_method()">' +
		'<div class="short_break"></div></div>'
	}
})