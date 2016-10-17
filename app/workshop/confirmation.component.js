(function () {
    'use strict';

    angular.module('app.workshop')
        .component('confirmation', confirmation());

    controller.$inject = ['$location', 'wsRegistrationService'];
    function controller ($location, wsRegistrationService) {
        var vm = this;
        vm.confirm = confirm;
        vm.goBack = goBack;

        activate();

        function activate() {
            vm.wsReg = wsRegistrationService.getRegistration();
        }

        function goBack () {
            wsRegistrationService.doEdit();
            $location.path('/');
        }

        function confirm () {
            wsRegistrationService.sendRegistration().success(function (data) {
                if (angular.equals(vm.wsReg, {})) {
                    alert ("There is no data to send to the server!\nYou will be redirected to the Registration Form!");
                    $location.path('/');
                }else if (data.success === "true") {
                    $location.path('/info');
                }
            });
        }
    }

    function confirmation () {
        return {
            templateUrl: 'app/workshop/confirmation.html',
            controller: controller
        }
    }
})();
