angular.module('angularTrainingApp').controller('FormCtrl', ['$scope', '$location', '$translate', 'CountryService', 'MealPrefService', 'WSRegistrationService',
	function ($scope, $location, $translate, CountryService, MealPrefService, WSRegistrationService){

		initCtrl()

		$scope.submit = function (valid) {
			if (valid) {
				WSRegistrationService.setRegistration($scope.wsReg)				
				$location.path("/confirmation")
			}			
		}

		$scope.resetForm = function () {
			initCtrl()
		}

		$scope.showMoreActions = function () {
			$scope.moreActions = true
		}

		$scope.hideMoreActions = function () {
			$scope.moreActions = false
		}

		$scope.changeLang = function () {
			if ($scope.translateTo === 'EN') {
				$translate.use('en')
			} else {
				$translate.use('es')
			}

			showTranslateToLang()
		}

		function showTranslateToLang () {
			if ($translate.use() === 'en') {
				$scope.translateTo = 'ES'
			} else {
				$scope.translateTo = 'EN'
			}
		}

		function initCtrl() {
			$scope.moreActions = false
			showTranslateToLang()
			var edit = WSRegistrationService.edit()

			$scope.wsReg = {}			
			$scope.states = []
			var countryPromise = CountryService.getAll().success(function (data) {
				$scope.countryList = data.countries
				$scope.states = data.states
				$scope.wsReg.country = $scope.countryList[0]
				if (edit !== true) {
					$scope.loadStates()		
				}
			})
			var mealPromise = MealPrefService.getAll().success(function (data) {
				$scope.mealPrefList = data
				$scope.wsReg.mealPref = $scope.mealPrefList[0]
			})

			if (edit === true) {
				var promises = new Array()
				promises.push(countryPromise)
				promises.push(mealPromise)
				Promise.all(promises).then(function (data) {
					$scope.wsReg = WSRegistrationService.getRegistration()
					var currState = $scope.wsReg.state
					$scope.loadStates()
					$scope.wsReg.state = currState
				})
			} 
		}

		$scope.loadStates = function () {
			for (var i = $scope.states.length - 1; i >= 0; i--) {
				if ($scope.states[i].country === $scope.wsReg.country) {
					$scope.stateList = $scope.states[i].states
					$scope.wsReg.state = $scope.stateList[0]
					break
				}
			}
		}
	}])