var angularTrainingApp = angular.module('angularTrainingApp', ['ui.router', 'ngAnimate', 'angularTrainingApp.services'])

angularTrainingApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/')

	$stateProvider
		.state('home', 
		{
			url: '/',
			templateUrl: 'Partials/formPart.html',
			controller: 'FormCtrl'
		})
		.state('confirmation', 
		{
			url: '/confirmation',
			templateUrl: 'Partials/confirmationPart.html',
			controller: 'ConfirmationCtrl'
		})
		.state('info', 
		{
			url: '/info',
			templateUrl: 'Partials/infoPart.html'			
		})
}])

// create angularTrainingApp.services module
angular.module('angularTrainingApp.services', [])