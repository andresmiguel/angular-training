(function () {
    'use strict';

    angular.module('app.workshop')
        .factory('mealPrefsService', mealPrefsService);

    function mealPrefsService ($http) {

        return {
            getAll: getMealPref
        };

        function getMealPref () {
            return $http.get('app/workshop/meal-prefs.json')
        }
    }
})();
