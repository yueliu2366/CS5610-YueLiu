
app.controller('selectedProfileCtrl', function ($scope, $http, $rootScope,BookService) {
    
        var user = BookService.getSelectedUser();
	   $scope.user = user;
	   
	//   $scope.selectedUser = BookService.getSelectedUser();
  $scope.followThisUser = function (){
	  
	  $rootScope.currentUser.following.push(user.username);
	  $http.put("/api/user/" + $rootScope.currentUser.username, $rootScope.currentUser).success(function (response) {
  		$rootScope.currentUser = response[0];
      })
      
        user.follower.push($rootScope.currentUser.username);
	  $http.put("/api/user/" + user.username, user).success(function (response) {
		  $scope.user = response[0];
      })
  };
    
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