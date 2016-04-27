
angular.module('ngApp.controllers', [])

.controller('MainCtrl', function($scope, $rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
	$scope.$state = $state.current;
    $scope.params = $stateParams;
	$scope.bodyClass = '';
})

.controller('cHomeCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cHome'; }).controller('cXnServiosYxaCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cXnServiosYxa'; }).controller('cAgendamentoCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cAgendamento'; }).controller('cXnStatusDoServioQpbCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cXnStatusDoServioQpb'; }).controller('cXnLocalizaoS2a7bCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cXnLocalizaoS2a7b'; }).controller('cContatoCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cContato'; }).controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
	$scope.showMenu = function () {
		$ionicSideMenuDelegate.toggleLeft();
	  };
	  $scope.showRightMenu = function () {
		$ionicSideMenuDelegate.toggleRight();
	  };
});

