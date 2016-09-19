(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
	  $scope.message = "";
	  $scope.items = "";

	  $scope.check = function () {
	    var arrayOfStrings = $scope.items.split(',');
	    console.log(arrayOfStrings);
	    var numOfItems = arrayOfStrings.length;
	    for (var i = 0; i < arrayOfStrings.length; i++) {
	    	if (arrayOfStrings[i] == "") {
	    		numOfItems--;
	    	}
	    }
	    if (numOfItems == 0) {
	    	$scope.message = "Please enter data first!";
	    }
	    else if (numOfItems <= 3) {
	    	$scope.message = "Enjoy!";
	    }
	    else {
	    	$scope.message = "Too much!";
	    }
	  };
	}

})();