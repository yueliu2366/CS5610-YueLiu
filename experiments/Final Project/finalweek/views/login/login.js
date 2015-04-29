app.controller("LoginCtrl", function ($scope, $http, $location, $rootScope, BookService) {
    $scope.login = function (user) {
       // console.log(user);
        $http.post("/login", user)
        .success(function (response) {
        	
           // console.log(response);
            $rootScope.currentUser = response;
            $location.url("/profile");
        })
        .error(function (err) {
        	          console.log("asdfasdfasfd");
                            console.log(err);
                             $scope.warning = "Username or Password is not correct, Please Check!";
                        });
    }
});