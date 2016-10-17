(function () {
   'use strict';

    angular.module('app.workshop', ['app.services', 'ui.router', 'ngAnimate', 'pascalprecht.translate'])
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$translateProvider'];
    function config ($stateProvider, $urlRouterProvider, $translateProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('wsRegForm',
                {
                    url: '/',
                    template: '<workshop-reg-form></workshop-reg-form>'
                })
            .state('confirmation',
                {
                    url: '/confirmation',
                    template: '<confirmation></confirmation>'
                })
            .state('info',
                {
                    url: '/info',
                    template: '<info></info>'
                });

        $translateProvider
            .translations('en', {
                WS_REGISTRATION : 'Workshop Registration',
                MORE_ACTIONS: 'More Actions',
                CHANGE_LANGUAGE_TO: 'Change language to',
                REGISTER_NOW_MSG: 'Register now while seats are available!',
                FIRST_NAME: 'First Name',
                LAST_NAME: 'Last Name',
                COMPANY: 'Company / Institution',
                ADDRESS: 'Address',
                CITY: 'City',
                STATE: 'State / Province / Region',
                COUNTRY: 'Country',
                EMAIL: 'Email',
                PHONE_NUMBER: 'Phone Number',
                LUNCH: 'Lunch',
                MEAL_PREFERENCE: 'Meal Preference',
                PAYMENT_DETAILS: 'Payment Details',
                PAYMENT_MODE: 'Payment Mode',
                CASH: 'Cash',
                CHEQUE: 'Cheque',
                DEMAND_DRAFT: 'Demand Draft',
                CHEQUE_NO: 'DD / Cheque No.',
                DRAWN_ON: 'Drawn On (Bank Name)',
                PAYABLE_AT: 'Payable at',
                SUBMIT: 'Submit',
                RESET: 'Reset',
                WS_REGISTRATION_DATA: 'Workshop Registration Data',
                BACK: 'Back',
                CONFIRM: 'Confirm',
                CONGRATULATIONS: 'Congratulations, your data has been sent successfully!!!',
                RETURN_TO_FORM: 'Return to Form'
            })
            .translations('es', {
                WS_REGISTRATION : 'Registro de Taller',
                MORE_ACTIONS: 'Mas Acciones',
                CHANGE_LANGUAGE_TO: 'Cambiar lenguaje a',
                REGISTER_NOW_MSG: 'Registrese ahora mientras existen asientos disponibles!',
                FIRST_NAME: 'Nombre',
                LAST_NAME: 'Apellido',
                COMPANY: 'Empresa / Institucion',
                ADDRESS: 'Direccion',
                CITY: 'Ciudad',
                STATE: 'Estado / Provincia / Region',
                COUNTRY: 'Pais',
                EMAIL: 'Email',
                PHONE_NUMBER: 'Numero de Telefono',
                LUNCH: 'Almuerzo',
                MEAL_PREFERENCE: 'Preferencia de comida',
                PAYMENT_DETAILS: 'Detalles del pago',
                PAYMENT_MODE: 'Modo de pago',
                CASH: 'Efectivo',
                CHEQUE: 'Cheque',
                DEMAND_DRAFT: 'Giro',
                CHEQUE_NO: 'Giro / Cheque No.',
                DRAWN_ON: 'Emitido por (Nombre del Banco)',
                PAYABLE_AT: 'Pagar a',
                SUBMIT: 'Enviar',
                RESET: 'Limpiar',
                WS_REGISTRATION_DATA: 'Datos del Registro de Taller',
                BACK: 'Atras',
                CONFIRM: 'Confirmar',
                CONGRATULATIONS: 'Felicidades, sus datos han sido enviados satisfactoriamente!!!',
                RETURN_TO_FORM: 'Volver al Formulario'
            });

        $translateProvider.preferredLanguage('en');
    }

})();
