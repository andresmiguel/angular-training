angular.module('angularTrainingApp').controller('FormCtrl', ['$scope', '$location',
	function ($scope, $location){

		$scope.submit = function () {
			$location.path("/confirmation")
		}
	}])