'use strict';

/**
 * @ngdoc function
 * @name daneApp.controller:TicketViewCtrl
 * @description
 * # TicketViewCtrl
 * Controller of the daneApp
 */


app.controller('TicketViewCtrl', ['$scope','$http', '$routeParams','$location','messages', function ($scope, $http, $routeParams, $location, messages) {
	// console.log($routeParams);
    $scope.loggedIn = '';

    /* Authentication */
    $scope.userLogged = JSON.parse(localStorage.getItem("user")) || [];

    if(localStorage.getItem('user') !== null){
        $scope.loggedIn = true;
    }
    else{
      $scope.loggedIn = false;
      $location.path('/login');
    }	

   	$scope.logout = function(){
          localStorage.removeItem('user');
          $location.path('/login');
    };

	$scope.tickets = [];
	// console.log($scope.tickets);

	$scope.ticket = [
        {
          ticketId: 1,
          issue:'Issue in dragging vouchers',
          tName: 'PAY VIA OR',
          time: '11:05 AM',
                  conversation:[
                {
                  message:"wweeeeee",
                }
          ],
        },  
         {
          ticketId: 2,
          issue:'No SMS recieved',
          tName: 'ACCOUNT BILLING',
          time: '1:02 PM',
          conversation:[
                {
                  message:'Hoy Bugoy One',
                }
          ],
        },
        {
          ticketId: 3,
          issue:'No SMS recieved',
          tName: 'REGISTRATION',
          time: '8:05 AM',
          conversation:[
                                {
                  message:"Lets Rock",
                }
          ],
        }
    ];

    $scope.ticketNum = $scope.ticket.length;
    $scope.loadedMsg = [];
    


    $scope.dashboard = function(){
    	$location.path('/');
    }
   	$scope.display = function(){
        $scope.show === false ? $scope.show = true :  $scope.show = false;
    }


	$scope.loggedIn = true;
    // $scope.ticketData = {};

    $http.get('storage/ticket.json')
        .then(function (response){
        	//console.log(response.data.id==1);
        	var conversation = response.data.ticket.find(ticket => ticket.id == $routeParams.ticketID);
	   		// console.log(conversation);
	   		$scope.ticketData = {
	   			name: $scope.userLogged.username,
	   			mobile: $scope.userLogged.mobile,
	   			email: $scope.userLogged.email,
	   			issue:conversation.issue,
	   			status:conversation.status,
	   			assignedTo:conversation.assign_to,
	   			department:conversation.department,
	   			healthTopic:conversation.help_topic,
	   		};
	   		messages.getMessage(conversation.message);

	   		$scope.tickets.push(conversation);
	   		$scope.loadedMsg = conversation.message;

	   },function (error){
	   		console.log(error);
	   });


       $scope.getComments = function(cmt) {
	    	// var date = new Date().getTime();
	    	// var d = { id:'3', userid: 1, user: u.username, message: cmt };
	        var date = new Date().getTime();
	      	//messages.userComment(cmt);
	      	var msg = {
	      		"id":3,
	        			"userid":$scope.userLogged.userId,
	        			"name": $scope.userLogged.username,
	        			"message":cmt,
	        			"dates":date
	      	};
	        $scope.comments = "";
	        console.log(msg);
	        $scope.loadedMsg.push(msg);
	    	
	    };

}]);
// app.service('messages', function(){
// 	// var message = [];
// 	// console.log(message);
// 	this.getMessage = function(msg){
// 			msg;
// 			// console.log(msg);
// 			// msg.push(this.userComment());
// 			this.messageData(msg);
// 	}
// 	this.userComment = function(comment){
// 		// var s = {id:2, message:'ohh myy'}
// 			return comment; 
// 	}
// 	this.messageData = function(data){
// 			// console.log(data);
// 			return data;
// 	}
// });