
app.controller('ProfileCtrl', function ($scope, $http, $rootScope,$location, BookService) {
	
	$http.get("/api/user/"+ $rootScope.currentUser.username).success(function (response) {
       
		$rootScope.currentUser = response;
    })
	
	$rootScope.currentUser = 
	
	$scope.toFollowerPage = function () {
		BookService.setUsersForFollowPage($rootScope.currentUser.follower);
		BookService.setIsFollower(true);
		 $location.url("/follow");
	}
	
  $scope.toFollowingPage = function () {
	  BookService.setUsersForFollowPage($rootScope.currentUser.following);
	  BookService.setIsFollower(false);
		 $location.url("/follow");
	}
    
    $scope.saveProfile = function () {
    	$http.put("/api/user/" + $rootScope.currentUser.username, $rootScope.currentUser).success(function (response) {
    		console.log(response);
    		console.log($rootScope.currentUser);
    		$rootScope.currentUser = response[0];
        })
    }
    
    $scope.toFavoritePage = function() {
    	$location.url("/favorite");
    }
    
 // hover edit btn
	var $btnEdit = $('#btnEdit');
	$btnEdit.data('state', 'hover');

	var enterShow = function() {
		if ($btnEdit.data('state') === 'hover') {
			$btnEdit.popover('show');
		}
	};
	var exitHide = function() {
		if ($btnEdit.data('state') === 'hover') {
			$btnEdit.popover('hide');
		}
	};
	$btnEdit.popover({
		trigger : 'manual'
	}).on('mouseenter', enterShow).on('mouseleave', exitHide)

	// hover go to home page button  
	var $btnHome = $('#btnHome');
	$btnHome.data('state', 'hover');

	var enterShow = function() {
		if ($btnHome.data('state') === 'hover') {
			$btnHome.popover('show');
		}
	};
	var exitHide = function() {
		if ($btnHome.data('state') === 'hover') {
			$btnHome.popover('hide');
		}
	};
	$btnHome.popover({
		trigger : 'manual'
	}).on('mouseenter', enterShow).on('mouseleave', exitHide)

	// hover email button  
	var $btnMail = $('#btnMail');
	$btnMail.data('state', 'hover');

	var enterShow = function() {
		if ($btnMail.data('state') === 'hover') {
			$btnMail.popover('show');
		}
	};
	var exitHide = function() {
		if ($btnMail.data('state') === 'hover') {
			$btnMail.popover('hide');
		}
	};
	$btnMail.popover({
		trigger : 'manual'
	}).on('mouseenter', enterShow).on('mouseleave', exitHide)
	
	// hover save button  
	var $btnSave = $('#btnSave');
	$btnSave.data('state', 'hover');

	var enterShow = function() {
		if ($btnSave.data('state') === 'hover') {
			$btnSave.popover('show');
		}
	};
	var exitHide = function() {
		if ($btnSave.data('state') === 'hover') {
			$btnSave.popover('hide');
		}
	};
	$btnSave.popover({
		trigger : 'manual'
	}).on('mouseenter', enterShow).on('mouseleave', exitHide)
});