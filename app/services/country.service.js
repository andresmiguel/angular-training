(function () {
   'use strict';

    angular.module('app.services')
        .factory('countryService', countryService);

    countryService.$inject = ['$http'];
    function countryService ($http) {

        return {
            getAll: getCountries
        };

        function getCountries () {
            return $http.get('app/services/countries.json').success(function (data) {
               return data;
            });
        }
    }
})();
