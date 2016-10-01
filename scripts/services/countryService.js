angular.module('angularTrainingApp.services')
	.factory('CountryService', ['$http', function ($http){

		var getCountries = function () {
			return $http.get('data/countries.json')
		}

		return {
			getAll: getCountries
		}

	}])