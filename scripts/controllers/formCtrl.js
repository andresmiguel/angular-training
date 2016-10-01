angular.module('angularTrainingApp').controller('FormCtrl', ['$scope', '$location', 'CountryService', 'MealPrefService',
	function ($scope, $location, CountryService, MealPrefService){

		initCtrl();

		$scope.submit = function () {
			$location.path("/confirmation")
		}

		function initCtrl() {
			$scope.wsReg = {}

			$scope.states = []
			CountryService.getAll().success(function (data) {
				$scope.countryList = data.countries
				$scope.states = data.states
				$scope.wsReg.country = $scope.countryList[0]
				$scope.loadStates()	
			})

			MealPrefService.getAll().success(function (data) {
				$scope.mealPrefList = data
				$scope.wsReg.mealPref = $scope.mealPrefList[0]
			})
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