game.directive('closeOverlay', function() {
  return { 
  	transclude: true,
  	template: "<div class='close' ng-click=modal.close()>"+
  	 "<div class='close_msg'>CLOSE </div><i class='fa fa-times'></i></div>"
  };
});
game.directive('closeBiasOverlay', function() {
  return {
    transclude: true,
    template: "<div class='close' ng-click=modal.bias_close()>"+
    "<div class='close_msg'>CLOSE </div><i class='fa fa-times'></i></div>"
  };
});