(function () {
    'use strict';

    angular.module('app.workshop')
        .factory('wsRegistrationService', wsRegistrationService);

    wsRegistrationService.$inject = ["$http"];
    function wsRegistrationService ($http) {
        var wsRegistration = {};
        var isEditing = false;

        return {
            getRegistration: getRegistration,
            setRegistration: setRegistration,
            doEdit: doEdit,
            undoEdit: undoEdit,
            edit: edit,
            sendRegistration: sendRegistration
        };

        function getRegistration () {
            return angular.copy(wsRegistration)
        }

        function setRegistration (wsReg) {
            undoEdit();
            wsRegistration = angular.copy(wsReg)
        }

        function doEdit () {
            isEditing = true;
        }

        function undoEdit () {
            isEditing = false;
        }

        function edit () {
            return isEditing;
        }

        function sendRegistration () {
            return $http.get('app/workshop/mock-data/server-response.json').success(function (data) {
                return data;
            });
        }
    }
})();
