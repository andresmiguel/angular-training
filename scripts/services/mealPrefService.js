angular.module('angularTrainingApp.services')
	.factory('MealPrefService', ['$http', function ($http){

		var getMealPref = function () {
			return $http.get('data/meal-prefs.json')
		}

		return {
			getAll: getMealPref
		}

	}])