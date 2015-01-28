gameControllers.controller('PullupCtrl', ['$scope', 'gameProgress',
  function($scope, gameProgress) {
    /*$http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });
    
    $scope.orderProp = 'age';  */
    console.log("Loaded the PULLUP CTRL controller")
    $scope.show_pullup = function(){
    	p= gameProgress
    	return (p.pullup());
    }
   
   

  }]);
