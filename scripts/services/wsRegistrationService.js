angular.module('angularTrainingApp.services')
	.factory('WSRegistrationService', [function (){

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

		return {
			getRegistration: getRegistration,
			setRegistration: setRegistration,
			doEdit: doEdit,
			undoEdit: undoEdit,
			edit: edit
		}

	}])