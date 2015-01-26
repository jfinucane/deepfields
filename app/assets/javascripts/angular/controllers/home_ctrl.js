console.log('load home')

gameControllers.controller('HomeCtrl', ['$scope', '$http', 'gameProgress', '$window', '$location',
  function($scope, $http, gameProgress, win, location) {
    /*$http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';  */
    console.log('HomeCtrl logged');
    p=gameProgress
    p.set_step(1)
    p.set_background_color()
    console.log(location.path())
  }]);
