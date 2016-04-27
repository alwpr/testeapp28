
var locale = 'en';
var url = 'http://www.criadordeapp.mobiweb.com.br';

var ngApp = angular.module('ngApp', ['ionic', 'ngResource', 'ngApp.controllers', 'ngApp.services'])

.run(function($ionicPlatform, $rootScope, $ionicLoading) {
    $rootScope.$on('loading:show', function() {
        $ionicLoading.show({
            noBackdrop: false
        });
    });

    $rootScope.$on('loading:hide', function() {
        $ionicLoading.hide();
    });

	$ionicPlatform.ready(function() {
		/* Ready */
	});
})

.config(function($stateProvider, $locationProvider, $urlRouterProvider, $ionicConfigProvider, $httpProvider) {

 $locationProvider.hashPrefix('!'); /*.html5Mode(true)*/ $ionicConfigProvider.backButton.previousTitleText(false).text(''); $httpProvider.interceptors.push(function($rootScope) { return { /* http request show loading */ request: function(config) { $rootScope.$broadcast('loading:show'); return config }, /* Hide loading in case any occurred */ requestError: function(response) { $rootScope.$broadcast('loading:hide'); return response }, /* Hide loading once got response */ response: function(response) { $rootScope.$broadcast('loading:hide'); return response }, /* Hide loading if got any response error */ responseError: function(response) { $rootScope.$broadcast('loading:hide'); return response } } }); $stateProvider .state('nav', { url: '/nav', abstract: true, templateUrl: 'nav.html', controller: 'NavCtrl' }) .state('nav.widget1', { url: '/widget/:widget/:func/:sl/:id', views: { 'mainContent': { templateUrl: function(params) { return url + '/api/v1/widget/route/' + params.widget + '/' + params.func + '/' + params.sl + '/' + params.id; } } } }) .state('nav.widget2', { url: '/widget/:widget/:func/:sl/:id/:extra', views: { 'mainContent': { templateUrl: function(params) { return url + '/api/v1/widget/route/' + params.widget + '/' + params.func + '/' + params.sl + '/' + params.id + '/' + params.extra; } } } }) .state('nav.home', { url: '/home', class: 'cHome', cache: false, views: { 'mainContent': { templateUrl: 'templates//api/v1/mobile/view/2N2Q-IZ72-R2JG-5DUA?_escaped_fragment_=home.html', controller: 'cHomeCtrl' } } }) .state('nav.xn-servios-yxa', { url: '/xn-servios-yxa', class: 'cXnServiosYxa', cache: false, views: { 'mainContent': { templateUrl: 'templates//api/v1/mobile/view/2N2Q-IZ72-R2JG-5DUA?_escaped_fragment_=xn-servios-yxa.html', controller: 'cXnServiosYxaCtrl' } } }) .state('nav.agendamento', { url: '/agendamento', class: 'cAgendamento', cache: false, views: { 'mainContent': { templateUrl: 'templates//api/v1/mobile/view/2N2Q-IZ72-R2JG-5DUA?_escaped_fragment_=agendamento.html', controller: 'cAgendamentoCtrl' } } }) .state('nav.xn-status-do-servio-qpb', { url: '/xn-status-do-servio-qpb', class: 'cXnStatusDoServioQpb', cache: false, views: { 'mainContent': { templateUrl: 'templates//api/v1/mobile/view/2N2Q-IZ72-R2JG-5DUA?_escaped_fragment_=xn-status-do-servio-qpb.html', controller: 'cXnStatusDoServioQpbCtrl' } } }) .state('nav.xn-localizao-s2a7b', { url: '/xn-localizao-s2a7b', class: 'cXnLocalizaoS2a7b', cache: false, views: { 'mainContent': { templateUrl: 'templates//api/v1/mobile/view/2N2Q-IZ72-R2JG-5DUA?_escaped_fragment_=xn-localizao-s2a7b.html', controller: 'cXnLocalizaoS2a7bCtrl' } } }) .state('nav.contato', { url: '/contato', class: 'cContato', cache: false, views: { 'mainContent': { templateUrl: 'templates//api/v1/mobile/view/2N2Q-IZ72-R2JG-5DUA?_escaped_fragment_=contato.html', controller: 'cContatoCtrl' } } }); $urlRouterProvider.otherwise('/nav/home');

});

