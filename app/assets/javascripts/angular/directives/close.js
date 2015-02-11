game.directive('closeOverlay', function() {
  return { 
  	transclude: true,
  	template: "<div class='close' ng-click=modal.close()>"+
  	 "<div class='close_msg'>CLOSE </div><i class='fa fa-times'></i></div>"
  };
});