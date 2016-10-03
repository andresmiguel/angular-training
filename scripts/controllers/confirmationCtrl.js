angular.module('angularTrainingApp').controller('ConfirmationCtrl', ['$scope', 'WSRegistrationService',
	function ($scope, WSRegistrationService){

		$scope.wsReg = WSRegistrationService.getRegistration()
	}])