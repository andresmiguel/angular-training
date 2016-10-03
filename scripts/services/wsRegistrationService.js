angular.module('angularTrainingApp.services')
	.factory('WSRegistrationService', [function (){

		var wsRegistration = {}

		var getRegistration = function () {
			return angular.copy(wsRegistration)
		}

		var setRegistration = function (wsReg) {
			wsRegistration = angular.copy(wsReg)
		}

		return {
			getRegistration: getRegistration,
			setRegistration: setRegistration
		}

	}])