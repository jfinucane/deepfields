console.log('load home')

gameControllers.controller('HomeCtrl', ['$scope', '$http', 'gameProgress', '$window', '$location', 'galaxyData',
  function($scope, $http, gameProgress, win, location, galaxyData) {
    /*$http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });


    $scope.orderProp = 'age';  */
  $scope.enter =  function(event) {
      $scope.home_inside = window.home_inside(event)
      window.inside_enter_diamond= $scope.home_inside
  }
  window.disable_mousemove_for_test = function () {
      $scope.enter = false
      window.inside_enter_diamond = false; 
  }
  $scope.home_class = function () {
       if ($scope.home_inside){ return 'btn_enter_hover'}
       else {return ''} 
  }
  $scope.home_click = function() {  
      if (window.inside_enter_diamond == true) {
         location.path('/itinerary') 
      }
  }    
  gameProgress.set_step(1)
  gameProgress.set_background_color()
  galaxyData.new_game()
  gameProgress.set_location_needs_sample('')
}]);
