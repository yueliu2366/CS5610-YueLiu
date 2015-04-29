app.controller("FollowCtrl", function ($scope, $http, $location, $rootScope, BookService) {
	//console.log(BookService.getUsersForFollowPage());
	var userNameStrings = BookService.getUsersForFollowPage();
	var isFollowerPage = BookService.getIsFollower();
	var userObjs = [];
	for (var i in userNameStrings) {
		$http.get("/api/user/"+ userNameStrings[i]).success(function (response) {
			userObjs.push(response);
	     })
		}
	console.log(userObjs);
	$scope.users = userObjs;
	$scope.follow = (isFollowerPage)? "followed by:" : "following";
	$scope.viewProfileForSelectedUser = function(user){
		$http.get("/api/user/"+ user.username).success(function (response) {
	            BookService.setSelectedUser(response);

	              $location.url("/profile_for_selected_user");
	        })
	}
	
   $scope.removeFromList = function (user){
	   
	   if(isFollowerPage)
		   {
		   var index = $scope.users.indexOf(user);
		   $scope.users.splice(index,1);
		   $rootScope.currentUser.follower = $scope.users;
		   }
	   else
		   {
		   var index = $scope.users.indexOf(user);
		   $scope.users.splice(index,1);
		   $rootScope.currentUser.following = $scope.users;
		   }
	   

  	    $http.put("/api/user/" + $rootScope.currentUser.username, $rootScope.currentUser).success(function (response) {
 
  		$rootScope.currentUser = response[0];
  		$scope.books = $rootScope.currentUser.favorite;
      })
	   
	  

   }
	
	$scope.toBookItemPage = function (book){
		
		BookService.toBookItemPageFromFavorite(book.bookId);
	}
	
	$scope.removeFromFavorite = function (book){
		var index = $rootScope.currentUser.favorite.indexOf(book);
		$rootScope.currentUser.favorite.splice(index,1);

    
	    $http.put("/api/user/" + $rootScope.currentUser.username, $rootScope.currentUser).success(function (response) {
		$rootScope.currentUser = response[0];
		$scope.books = $rootScope.currentUser.favorite;
    })

	}
	
		
});

