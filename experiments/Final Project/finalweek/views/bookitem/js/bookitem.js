
app.controller('BookItemCtrl', function ($http, $scope, $anchorScroll, $location, $rootScope, BookService) {	
	var currentBook = BookService.getCurrentBook();
	//console.log(currentBook);
	$scope.currentBook = currentBook;
	$http.get("/api/comments/"+ currentBook.id).success(function (response) {
        $scope.comments = response;
    })
	$location.hash('top');

    // call $anchorScroll()
    $anchorScroll();
    
    
    $(document).ready(function () {
        $("#flip").click(function () {
            $("#panel").slideToggle(500);
        });
    });
    
    $scope.addToFavorites = function() {
    	if(!$rootScope.currentUser)
 	   {
 	   $location.url("/login");
 	   return;
 	   }
    	
    	var favorBook = {imgUrl:currentBook.volumeInfo.imageLinks.thumbnail, 
    			 		title:currentBook.volumeInfo.title, 
    			 		author:currentBook.volumeInfo.authors[0],
    			 		description:currentBook.volumeInfo.description,
    			 		bookId:currentBook.id};
    	$rootScope.currentUser.favorite.push(favorBook);
    	currentBook.favorButton = true;
    	$http.put("/api/user/" + $rootScope.currentUser.username, $rootScope.currentUser).success(function (response) {
    		$rootScope.currentUser = response[0];
        })
        
        
       
    }
    
    $scope.deleteFromFavorites = function() {
    	
    	$rootScope.currentUser.favorite.pop();
    	
    	currentBook.favorButton = false;
    	$http.put("/api/user/" + $rootScope.currentUser.username, $rootScope.currentUser).success(function (response) {

    		$rootScope.currentUser = response[0];
        })
    	
    }    
    $scope.submitComment = function (){
       if(!$rootScope.currentUser)
    	   {
    	   $location.url("/login");
    	   return;
    	   }
    	var newComment = {
    					  bookId: currentBook.id, 
    				      content: $scope.comment.text,
    				      date: Date(),
    					  username : $rootScope.currentUser.username
    					  };

    	$http.post("/api/comment/", newComment).success(function (response) {
            $scope.comments = response;
        })
    }
    
    $scope.viewProfileForSelectedUser = function(comment){
    	console.log(comment.username); 
    	
    	$http.get("/api/user/"+ comment.username).success(function (response) {
            BookService.setSelectedUser(response);

            if(comment.username == $rootScope.currentUser.username)
            	$location.url("/profile");
            else
              $location.url("/profile_for_selected_user");
        })
    
    }
    

    
});