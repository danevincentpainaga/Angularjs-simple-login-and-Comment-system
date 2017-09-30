'use strict';

/**
 * @ngdoc function
 * @name daneApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the daneApp
 */

  app.controller('UserCtrl', function ($scope, $cookies) {

    $scope.loggedIn = true;

   

    // angular.forEach($scope.ticket, function(item, val){
    // 		// console.log(item.issue);
    // 		if(val===1){
    // 			console.log(item.issue);
    // 		}
    // 		return false;
    // });


    $scope.userdata = JSON.parse(localStorage.getItem("userdata")) || {};


    $scope.getCurrentUser = function(cmt) {
    		var date = new Date();
    		var d = { keys:'1', dates: date, message: cmt};

        $scope.userdata = {};
        //localStorage.getItem('userdata', JSON.stringify($scope.userdata));
        $scope.userdata = 	{
        					"name":"Chuckie",
        					"userid":2,
        					"access":2
        				};
        localStorage.setItem('userdata', JSON.stringify($scope.userdata));
        	
    };

  });

// app.directive('viewData', function(){
//   		return{
//   			restrict: 'A',
//         	scope: true,
//   			link:function ($scope, element, attrs){
//   					element.bind('click', function () {
//   						var a = attrs.did;
//   						console.log(a);
//   					});
//   			}
//   		}
// });

