
app.controller('LandingCtrl', function ($scope, BookService) {	
	// call service
	$scope.mySearch = function (searchText) {
		BookService.searchBooks(searchText);
	}
});