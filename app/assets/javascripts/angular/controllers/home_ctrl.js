console.log('load home')

gameControllers.controller('HomeCtrl', ['$scope', '$http', 'gameProgress', '$window', '$location',
  function($scope, $http, gameProgress, win, location) {
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


    console.log('HomeCtrl logged');
    p=gameProgress
    p.set_step(1)
    p.set_background_color()
    console.log(location.path())
  }]);
