game = angular.module('gamePage', [
	'ngRoute',
	'gameControllers'
	])
console.log('app here')
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
      when('/start/outback', {templateUrl: '/lesson/outback.html', controller: 'outbackCtrl'}).
      when('/start/stare', {templateUrl: '/lesson/stare.html', controller: 'stareCtrl'}).
      when('/start/enter', {templateUrl: '/lesson/enter.html', controller: 'classicCtrl'}).
      when('/start/select', {templateUrl: '/finder/select.html', controller: 'selectCtrl'}).
      when('/start/got_counts', {templateUrl: '/finder/got_counts.html', controller: 'gotCountsCtrl'}).
      when('/start/irregulars', {templateUrl: '/finder/irregulars.html', controller: 'irregularCtrl'}).
      when('/start/next', {templateUrl: '/finder/next.html', controller: 'nextCtrl'}).

      when('/bias/banishing', {templateUrl: '/bias/index.html', controller: 'banishingCtrl'}).
      when('/bias/compare_frequency', {templateUrl: '/bias/compare.html', controller: 'compareCtrl'}).

      when('/sample/enough', {templateUrl: '/sample/index.html', controller: 'indexSampleCtrl'}).
      when('/sample/go', {templateUrl: '/sample/go.html', controller: 'goCtrl'}).
      when('/sample/magnify', {templateUrl: '/funnel/magnify.html', controller: 'magnifyCtrl'}).
      when('/sample/smallest', {templateUrl: '/funnel/smallest.html', controller: 'smallestCtrl'}).
      when('/sample/best_region', {templateUrl: '/funnel/best_region.html', controller: 'bestRegionCtrl'}).
      when('/sample/you_got_it', {templateUrl: '/funnel/you_got_it.html', controller: 'youGotItCtrl'}).
      when('/sample/compare_astronomer', {templateUrl: '/funnel/compare_astronomer.html', controller: 'compareAstronomerCtrl'}).
      when('/sample/you_versus', {templateUrl: '/funnel/you_versus.html', controller: 'youVersusCtrl'}).

      when('/fields/enter', {templateUrl: '/symmetry/enter.html', controller: 'enterCtrl'}).
      when('/fields/sample', {templateUrl: '/symmetry/sample.html', controller: 'sampleCtrl'}).
      when('/fields/evaluate', {templateUrl: '/symmetry/evaluate.html', controller: 'evaluateCtrl'}).
      when('/fields/question', {templateUrl: '/symmetry/question.html', controller: 'questionSymmetryCtrl'}).
      when('/fields/answer', {templateUrl: '/symmetry/answer.html', controller: 'answerCtrl'}).
      when('/fields/uniform', {templateUrl: '/symmetry/uniform.html', controller: 'uniformCtrl'}).

      when('/last_stop/question', {templateUrl: '/last/question.html', controller: 'questionLastStopCtrl'}).
      when('/last_stop/different', {templateUrl: '/last/different.html', controller: 'differentCtrl'}).
      when('/last_stop/congratulations', {templateUrl: '/last/congratulations.html', controller: 'congratulationsCtrl'}).
      otherwise ({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
   
  }]);


