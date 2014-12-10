game = angular.module('gamePage', [
	'ngRoute',
	'gameControllers'
	])

game.config(['$routeProvider', '$locationProvider', '$injector',
  function($routeProvider, $locationProvider, $injector) {
    $routeProvider.
      when('/', {
        templateUrl: '/lesson/home.html',
        controller: 'HomeCtrl',
        redirectTo: function(current, path, search){
          if(search.goto){
            // if we were passed in a search param, and it has a path
            // to redirect to, then redirect to that path
            console.log(search.goto);
            return "/" + search.goto
          }
          else{
            // else just redirect back to this location
            // angular is smart enough to only do this once.
            return "/"
          }
        }  
      }).
      when('/home',  { templateUrl: '/lesson/home.html', controller: 'HomeCtrl'}).
      when('/itinerary', {templateUrl: '/lesson/index.html', controller: 'ItineraryCtrl'}).

      when('/start/outback', {templateUrl: '/lesson/outback.html', controller: 'StartCtrl'}).
      when('/start/enter', {templateUrl: '/lesson/classic.html', controller: 'StartCtrl'}).
      when('/start/select', {templateUrl: '/finder/select.html', controller: 'StartCtrl'}).
      when('/start/got_counts', {templateUrl: '/finder/got_counts.html', controller: 'StartCtrl'}).
      when('/start/irregulars', {templateUrl: '/finder/irregulars.html', controller: 'StartCtrl'}).
      when('/start/next', {templateUrl: '/finder/next.html', controller: 'ItineraryCtrl'}).

      when('/bias/banishing', {templateUrl: '/bias/index.html', controller: 'BiasCtrl'}).
      when('/bias/compare', {templateUrl: '/bias/compare.html', controller: 'BiasCtrl'}).

      when('/sample/enough', {templateUrl: '/sample/index.html', controller: 'SampleCtrl'}).
      when('/sample/go', {templateUrl: '/sample/go.html', controller: 'SampleCtrl'}).
      when('/sample/magnify', {templateUrl: '/funnel/magnify.html', controller: 'SampleCtrl'}).
      when('/sample/smallest', {templateUrl: '/funnel/smallest.html', controller: 'SampleCtrl'}).
      when('/sample/best_region', {templateUrl: '/funnel/best_region.html', controller: 'SampleCtrl'}).
      when('/sample/you_got_it', {templateUrl: '/funnel/you_got_it.html', controller: 'SampleCtrl'}).
      when('/sample/compare_astronomer', {templateUrl: '/funnel/compare_astronomer.html', controller: 'SampleCtrl'}).
      when('/sample/you_versus', {templateUrl: '/funnel/you_versus.html', controller: 'SampleCtrl'}).

      when('/fields/enter', {templateUrl: '/symmetry/enter.html', controller: 'FieldCtrl'}).
      when('/fields/sample', {templateUrl: '/symmetry/sample.html', controller: 'FieldCtrl'}).
      when('/fields/evaluate', {templateUrl: '/symmetry/evaluate.html', controller: 'FieldCtrl'}).
      when('/fields/question', {templateUrl: '/symmetry/question.html', controller: 'FieldCtrl'}).
      when('/fields/answer', {templateUrl: '/symmetry/answer.html', controller: 'FieldCtrl'}).
      when('/fields/uniform', {templateUrl: '/symmetry/uniform.html', controller: 'FieldCtrl'}).

      when('/last_stop/question', {templateUrl: '/last/question.html', controller: 'LastStopCtrl'}).
      when('/last_stop/different', {templateUrl: '/last/different.html', controller: 'LastStopCtrl'}).
      when('/last_stop/congratulations', {templateUrl: '/last/congratulations.html', controller: 'LastStopCtrl'}).
      otherwise ({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
   
  }]);

/*  This worked!
game.directive('secondPage', function() {
	return {
		restrict: 'E',
		templateUrl: '/lesson/index.html'
	}
})
*/

game.controller( 'homeCtrl', function ($scope) { alert('hi'); $scope.x=333333; $scope.enter = window.mouseEnter()});

