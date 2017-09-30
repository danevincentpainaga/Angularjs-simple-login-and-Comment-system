'use strict';

/**
 * @ngdoc function
 * @name daneApp.controller:TicketViewCtrl
 * @description
 * # TicketViewCtrl
 * Controller of the daneApp
 */


app.controller('TicketViewCtrl', ['$scope','$http', '$routeParams', function ($scope, $http, $routeParams) {
	// console.log($routeParams);

	$scope.tickets = [];

	$scope.loggedIn = true;
	$scope.userdata = JSON.parse(localStorage.getItem("userdata"));

    $http.get('storage/ticket.json')
        .then(function (response){
        	//console.log(response.data.id==1);
        	var conversation = response.data.ticket.find(ticket => ticket.id == $routeParams.ticketID);
	   		// console.log(conversation.message);
	   		$scope.tickets.push(conversation);
	   		//sconsole.log($scope.tickets,'Messages');
	   },function (error){
	   		console.log(error);
	   });
}]);