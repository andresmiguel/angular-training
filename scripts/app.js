var angularTrainingApp = angular.module('angularTrainingApp', ['ui.router', 'ngAnimate', 'angularTrainingApp.services'])

angularTrainingApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/')

	$stateProvider
		.state('app', 
		{
			url: '/',
			views: {				
				'content': {
					controller: 'FormCtrl',
					templateUrl: 'Partials/formPart.html'
				}
			}
		})
		.state('app.confirmation', 
		{
			url: 'confirmation',
			views: {
				'content@': {
					controller: 'ConfirmationCtrl',
					templateUrl: 'Partials/confirmationPart.html'
				}
			}
		})
}])

// create angularTrainingApp.services module
angular.module('angularTrainingApp.services', [])