game.directive('closeOverlay', function() {
  return { 
  	transclude: true,
  	template: "<div class='close' ng-click=close_modal()>"+
  	 "<div class='close_msg'>CLOSE </div><i class='fa fa-times'></i></div>"
  };
});