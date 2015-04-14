var app = angular.module("MoviesApp", []);
app.controller("MovieController",
function ($scope, $http) {
  
    $http.get("/api/movies").success(function (response) {
        $scope.movies = response;
    })
   
});