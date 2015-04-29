
app.controller('BooklistCtrl', function ($http, $scope, BookService) {
	var currentPage = 1;
	var currentText = null;
	currentText = BookService.getCurrentText();
	$scope.currentPage = currentPage;
	$scope.chunkedData = BookService.getSearchResults();	
	
	$scope.viewBookItem = function (book) {
		BookService.toBookItemPage(book);
	    }
	
	$scope.searchLeft = function () {
		startIndex = (currentPage - 2 ) * 10;
		currentPage = currentPage - 1;

		$http.jsonp("https://www.googleapis.com/books/v1/volumes?q="+ currentText + "&startIndex="+startIndex+"&maxResults=12" + "&callback=JSON_CALLBACK")
        .success(function (response) {
        searchResults = response;
        var newArr = [];
  		  for (var i=0; i<searchResults.items.length; i+=3) {
  		    newArr.push(searchResults.items.slice(i, i+3));
  		  }
  		
  		$scope.chunkedData = newArr;
  		$scope.currentPage = currentPage;
        })
	    }
	
	$scope.searchRight = function () {
		
		console.log("currentPage is : "+ currentPage+ " and current text is : "+currentText);
		startIndex = currentPage * 10;
		currentPage = currentPage + 1;
		
		$http.jsonp("https://www.googleapis.com/books/v1/volumes?q="+ currentText + "&startIndex="+startIndex+"&maxResults=12" + "&callback=JSON_CALLBACK")
        .success(function (response) {
        searchResults = response;
        var newArr = [];
  		  for (var i=0; i<searchResults.items.length; i+=3) {
  		    newArr.push(searchResults.items.slice(i, i+3));
  		  }
  		
  		$scope.chunkedData = newArr;
  		$scope.currentPage = currentPage;
        })
		
	   }
	

	

});