angular.module('angularTrainingApp').controller('ConfirmationCtrl', ['$scope', '$location', 'WSRegistrationService',
	function ($scope, $location, WSRegistrationService){

		initCtrl()

		$scope.goBack = function () {
			WSRegistrationService.doEdit()
			$location.path('/')
		}

		function initCtrl() {
			$scope.wsReg = WSRegistrationService.getRegistration()	
		}
		
	}])