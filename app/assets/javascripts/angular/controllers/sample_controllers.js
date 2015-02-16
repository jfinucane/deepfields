'use strict';


gameControllers.controller('sampleCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus',
  function($scope, $routeParams, $injector,page) {
    page($scope,14)
  }]);

gameControllers.controller('goCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus',
  function($scope, $routeParams, $injector,page) {
    page($scope,15)
  }]);

gameControllers.controller('magnifyCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus',
  function($scope, $routeParams, $injector,page) {
    page($scope,16)
  }]);

gameControllers.controller('smallestCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus',
  function($scope, $routeParams, $injector,page) {
    page($scope,17)
  }]);

gameControllers.controller('bestRegionCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus',
  function($scope, $routeParams, $injector,page) {
    page($scope,18)
  }]);

gameControllers.controller('youGotItCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus',
  function($scope, $routeParams, $injector,page) {
    page($scope,19)
  }]);

gameControllers.controller('compareAstronomerCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus',
  function($scope, $routeParams, $injector,page) {
    page($scope,20)
  }]);

gameControllers.controller('youVersusrCtrl', ['$scope', '$routeParams', '$injector', 'pageStatus',
  function($scope, $routeParams, $injector,page) {
    page($scope,21)
  }]);
