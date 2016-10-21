(function () {
    'use strict';

    angular.module('app.workshop')
        .component('workshopRegForm', workshopRegForm());

    function workshopRegForm() {
        return {
            templateUrl: 'app/workshop/workshop-reg-form.html',
            controller: controller
        }
    }

    controller.$inject = ['$location', '$translate', '$q','countryService', 'mealPrefsService', 'wsRegistrationService'];
    function controller($location, $translate, $q, countryService, mealPrefsService, wsRegistrationService) {

        var vm = this;
        vm.moreActions = false;
        vm.wsReg = {};
        vm.states = [];
        vm.changeLang = changeLang;
        vm.hideMoreActions = hideMoreActions;
        vm.loadStates = loadStates;
        vm.resetForm = resetForm;
        vm.showMoreActions = showMoreActions;
        vm.showTranslateToLang = showTranslateToLang;
        vm.submit = submit;

        //////////

        vm.$onInit = function () {
            vm.moreActions = false;
            showTranslateToLang();
            var edit = wsRegistrationService.edit();
            vm.wsReg = {};
            vm.states = [];
            var countryPromise = countryService.getAll().then(function (data) {
                vm.countryList = data.data.countries;
                vm.states = data.data.states;
                vm.wsReg.country = vm.countryList[0];
                if (edit !== true) {
                    loadStates();
                }
            });
            var mealPromise = mealPrefsService.getAll().then(function (data) {
                vm.mealPrefList = data.data;
                vm.wsReg.mealPref = vm.mealPrefList[0];
            });

            if (edit === true) {
                vm.wsReg = wsRegistrationService.getRegistration();
                var currCountry = vm.wsReg.country;
                var promises = [];
                promises.push(countryPromise);
                promises.push(mealPromise);
                $q.all(promises).then(function () {
                    vm.wsReg.country = currCountry;
                    var currState = vm.wsReg.state;
                    loadStates();
                    vm.wsReg.state = currState;
                })
            }
        }

        function changeLang() {
            if (vm.translateTo === 'EN') {
                $translate.use('en');
            } else {
                $translate.use('es');
            }

            showTranslateToLang();
        }

        function hideMoreActions() {
            vm.moreActions = false;
        }

        function loadStates() {
            for (var i = vm.states.length - 1; i >= 0; i--) {
                if (vm.states[i].country === vm.wsReg.country) {
                    vm.stateList = vm.states[i].states;
                    vm.wsReg.state = vm.stateList[0];
                    break;
                }
            }
        }

        function resetForm() {
            vm.$onInit();
        }

        function showMoreActions() {
            vm.moreActions = true;
        }

        function showTranslateToLang() {
            if ($translate.use() === 'en') {
                vm.translateTo = 'ES';
            } else {
                vm.translateTo = 'EN';
            }
        }

        function submit(valid) {
            if (valid) {
                wsRegistrationService.setRegistration(vm.wsReg);
                $location.path("/confirmation")
            }
        }

    }

})();
