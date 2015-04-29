app.controller("RegisterCtrl", function ($scope, $http, $location, $rootScope) {
    $scope.register = function (user) {
        console.log(user);
        if (!user.username || !user.password || !user.password2 || user.password != user.password2) {
            $rootScope.r_warning = "Your passwords don't match";
        }
        else {
            $http.post("/register", user)
            .success(function (response) {
                console.log(response);
                if (response != null) {
                    $rootScope.currentUser = response;
                    $location.url("/profile");
                }
            });
        }
    }
});