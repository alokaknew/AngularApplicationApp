"use strict";

(function () {
    var AssignmentApplication = angular.module("AssignmentApp", []);
    AssignmentApplication.controller("AssignmentController", function($scope){
    $scope.isFomActive = false;
         $scope.isDisplayActive = false;
        	$scope.submitForm = function() {
                    
			// check to make sure the form is completely valid
			if ($scope.userForm.$valid) {
                var username = $scope.user.username;
                var email = $scope.user.email;
                var Fullname = $scope.user.fullname;  
                
                $scope.details = {
                    username:$scope.user.username,
                    email:$scope.user.email,
                    Fullname:$scope.user.fullname
                }
                 $scope.isDisplayActive = true;
                console.log($scope.details);  
				
			}

		};
    $scope.activeFom = function(index){
        switch(index)
            {
                case 1:
                    $scope.isFomActive = true;
            }
    }  
   
    });
})();



