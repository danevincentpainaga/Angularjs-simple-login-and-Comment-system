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
						username:"Dane",
						password:"password",
						name:"Dane Vincent Painaga",
						number:9222374223,
						photo:'/images/naruto.jpg',
						email:'danevincentpainaga@gmail.com'
					},
					{
						userid:2,
						username:"chuckie",
						password:"password",
						name:"Chuckie Cowboy",
						number:9253554223,
						photo:'/images/naruto2.jpg',
						email:'cowboy@gmail.com'
					}

				];

		return {
			logIn: function(username, password){
		
					angular.forEach(users, function(val, index){
						if(username == val.username && password == val.password){
							//console.log(val.name);
							localStorage.setItem('user', JSON.stringify(
									{
										userId: val.userid,
										username: val.username,
										name: val.name,
										image: val.photo,
										mobile: val.number, 
										email: val.email
									}
								)
							);
							$location.path('/');
						}else{
							//console.log('logging');
						}
						return false;

					});
			},
		}

});
