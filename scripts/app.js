var angularTrainingApp = angular.module('angularTrainingApp', ['ui.router', 'ngAnimate', 'angularTrainingApp.services', 'pascalprecht.translate'])

angularTrainingApp.config(['$stateProvider', '$urlRouterProvider', '$translateProvider', function ($stateProvider, $urlRouterProvider, $translateProvider) {
	
	$urlRouterProvider.otherwise('/')

	$stateProvider
		.state('home', 
		{
			url: '/',
			templateUrl: 'Partials/formPart.html',
			controller: 'FormCtrl'
		})
		.state('confirmation', 
		{
			url: '/confirmation',
			templateUrl: 'Partials/confirmationPart.html',
			controller: 'ConfirmationCtrl'
		})
		.state('info', 
		{
			url: '/info',
			templateUrl: 'Partials/infoPart.html'			
		})

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
			CONGRATULATIONS: 'Congratulations, your data has been sent successfully!!!'
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
			CONGRATULATIONS: 'Felicidades, sus datos han sido enviados satisfactoriamente!!!'
		})

	$translateProvider.preferredLanguage('en')
}])

// create angularTrainingApp.services module
angular.module('angularTrainingApp.services', [])