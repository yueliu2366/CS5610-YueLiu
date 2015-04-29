app.controller("FavoriteCtrl", function ($scope, $http, $location, $rootScope, BookService) {
	$scope.books = $rootScope.currentUser.favorite;
	
	$scope.toBookItemPage = function (book){
		//console.log(book);
		//console.log(book.bookId);
		BookService.toBookItemPageFromFavorite(book.bookId);
	}
	
	$scope.removeFromFavorite = function (book){
		var index = $rootScope.currentUser.favorite.indexOf(book);
		$rootScope.currentUser.favorite.splice(index,1);

    	    $http.put("/api/user/" + $rootScope.currentUser.username, $rootScope.currentUser).success(function (response) {
    		//console.log(response);
    		//console.log($rootScope.currentUser);
    		$rootScope.currentUser = response[0];
    		$scope.books = $rootScope.currentUser.favorite;
        })

	}
	

	
});

