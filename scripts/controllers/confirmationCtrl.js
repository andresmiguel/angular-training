angular.module('angularTrainingApp').controller('ConfirmationCtrl', ['$scope', '$location', 'WSRegistrationService',
	function ($scope, $location, WSRegistrationService){

		initCtrl()

		$scope.goBack = function () {
			WSRegistrationService.doEdit()
			$location.path('/')
		}

		$scope.confirm = function () {
			WSRegistrationService.sendRegistration().success(function (data) {
				$location.path('/info')
			})
		}

		function initCtrl() {
			$scope.wsReg = WSRegistrationService.getRegistration()	
		}
		
	}])