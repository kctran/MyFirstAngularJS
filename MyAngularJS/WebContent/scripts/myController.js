var app = angular
	.module("myApp", [])			// Method chaining module and controller in one declaration
	.controller("ctrl", function($scope) {
	
	var employee = {
			firstName : "Khue",
			lastName : "Tran",
			gender : "Male"
	};
	$scope.employee = employee;
	
	var country = {
			name: "USA",
			capital: "Washington, D.C.",
			flag: "Images/FlagHistory4.png"
	};
	$scope.country = country;
	
	$scope.testMsg = "Love AngularJS";
	
	$scope.un="";
	$scope.pw="";
	$scope.msg1="";
	$scope.msg2="";
	
	$scope.function1=function(e) {
		if ($scope.un.length==0) {
			$scope.msg1="***** Enter user name";
			e.preventDefault();  // The preventDefault method cancels the event if it is cancelable, 
								 // meaning that the default action that belongs to the event will not occur.
		} else {
			$scope.msg1="";
		}
		if ($scope.pw.length==0) {
			$scope.msg2="***** Enter password";
			e.preventDefault();  // The preventDefault method cancels the event if it is cancelable, 
								 // meaning that the default action that belongs to the event will not occur.
		} else {
			$scope.msg2="";
		}
	}
});