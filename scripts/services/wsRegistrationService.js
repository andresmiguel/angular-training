angular.module('angularTrainingApp.services')
	.factory('WSRegistrationService', ['$http' , function ($http){

		var wsRegistration = {}
		var edit = false

		var getRegistration = function () {
			return angular.copy(wsRegistration)
		}

		var setRegistration = function (wsReg) {
			undoEdit()
			wsRegistration = angular.copy(wsReg)
		}

		var doEdit = function () {
			edit = true
		}

		var undoEdit = function () {
			edit = false
		}

		var edit = function () {
			return edit
		}

		var sendRegistration = function () {
			return $http.get('data/server-response.json')
		}

		return {
			getRegistration: getRegistration,
			setRegistration: setRegistration,
			doEdit: doEdit,
			undoEdit: undoEdit,
			edit: edit,
			sendRegistration: sendRegistration
		}

	}])