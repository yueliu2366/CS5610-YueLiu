var app = angular.module("MoviesApp", []);
app.controller("MovieController",
function ($scope, $http) {
  
    $http.get("/api/websites").success(function (response) {
        $scope.websites = response;
    })
   
});