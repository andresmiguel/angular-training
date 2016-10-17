(function () {
    'use strict';

    angular.module('app.workshop')
        .component('info', info());

    function info () {
        return {
            templateUrl: 'app/workshop/info.html'
        }
    }

})();
