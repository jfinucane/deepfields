game = angular.module('gamePage', [
	'ngRoute',
	'gameControllers'
	])

game.config(['$routeProvider',
  function($routeProvider, $injector) {
    $routeProvider.
      when('/', {
        templateUrl: '/game_page/index.html',
        controller: 'HomeCtrl'
      }).
      when('/lesson/index', {
        templateUrl: '/game_page/second.html',
        controller: 'ItineraryCtrl'
      }).
      otherwise({
        redirectTo: '/lesson/outback'
      });
  }]);





/*  This worked!
game.directive('secondPage', function() {
	return {
		restrict: 'E',
		templateUrl: '/lesson/index.html'
	}
})
*/