'use strict';

/**
 * @ngdoc function
 * @name daneApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the daneApp
 */

app.controller('LoginCtrl', function ($scope, $cookies, LoginService, $location, $timeout ) {

	$scope.logged = '';
	$scope.udata = JSON.parse(localStorage.getItem("user")) || [];
	//console.log($scope.udata.username);
	
	if(localStorage.getItem("user")!== null){
		$scope.loggedIn = false;
		$location.path('/');
	}else{
		$scope.loggedIn = true;
		$location.path('/login');
	}

	
	$scope.errors = false;

	$scope.formSubmit = function(){
			LoginService.logIn($scope.username, $scope.password);
			$scope.errors = true;
			
			$timeout(function(){
				$scope.errors = false;
			},4000);
	};

});


app.factory('LoginService', function($location){
			var users = [
					{
						userid:1,
						username:"dane",
						password:"password",
						name:"Dane"
					},
					{
						userid:2,
						username:"chuckie",
						password:"password",
						name:"Chuckie"
					}

				];

		return {
			logIn: function(username, password){
		
					angular.forEach(users, function(val, index){
						if(username == val.username && password == val.password){
							//console.log(val.name);
							localStorage.setItem('user', JSON.stringify({userId: val.userid, username: val.name}));
							$location.path('/');
						}else{
							//console.log('logging');
						}
						return false;

					});
			},
		}

});
