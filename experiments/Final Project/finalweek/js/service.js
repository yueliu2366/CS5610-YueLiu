 app.factory('BookService', function BookService($http, $location) {
var searchResults = null;
    var currentBook = null;
    var currentText = null;
    var selectedUser = null;
    var usersForFollowPage = null;
    var isFollowerPage = false;
    
var setIsFollower  = function (value){
	isFollowerPage = value;
}

var getIsFollower = function (){
	return isFollowerPage;
}
    
 var setUsersForFollowPage = function (users) {
	 usersForFollowPage = users;
 }    
 
 var getUsersForFollowPage = function () {
	  return usersForFollowPage;
 }  
    
var setSelectedUser = function (user){
	selectedUser = user;
    }
    
    var getSelectedUser = function (username){
    	return selectedUser;
    }
    
    
    var searchBooks = function (searchText){
    	currentText = searchText;
    	$http.jsonp("https://www.googleapis.com/books/v1/volumes?q="+ searchText + "&startIndex=0&maxResults=12" + "&callback=JSON_CALLBACK")
        .success(function (response) {
        	searchResults = response;
        	 $location.url('/booklist');
        })
        
       
    }
    
    var getSearchResults = function (){
    	if(searchResults == null)
    	  return searchResults;
    	else
    		{
    		var newArr = [];
    		  for (var i=0; i<searchResults.items.length; i+=3) {
    		    newArr.push(searchResults.items.slice(i, i+3));
    		  }
    		
    		console.log(newArr);
    		  return newArr;
    		}
    }
    
    var toBookItemPage = function (book){
    	currentBook = book;
    	//console.log(currentBook);
    	$location.url('/bookitem');
    }
    
    var toBookItemPageFromFavorite = function (bookId){
    	$http.jsonp("https://www.googleapis.com/books/v1/volumes?q="+ bookId  + "&callback=JSON_CALLBACK")
        .success(function (response) {
        	currentBook = response.items[0];
        	console.log(currentBook);
        	 $location.url('/bookitem');
        })
    }
    
    var getCurrentBook = function (){
    	return currentBook;
    }
    
    var getCurrentText = function (){
    	return currentText;
    }
    
    return {
    	searchBooks : searchBooks,
    	getSearchResults : getSearchResults,
    	toBookItemPage : toBookItemPage,
    	getCurrentBook : getCurrentBook,
    	getCurrentText : getCurrentText,
    	getSelectedUser : getSelectedUser,
    	setSelectedUser : setSelectedUser,
    	toBookItemPageFromFavorite : toBookItemPageFromFavorite,
    	setUsersForFollowPage : setUsersForFollowPage,
    	getUsersForFollowPage : getUsersForFollowPage,
    	setIsFollower : setIsFollower,
    	getIsFollower : getIsFollower
    	
    }
});