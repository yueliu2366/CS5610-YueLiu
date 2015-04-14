var app = angular.module("MoviesApp", []);
app.controller("MovieController",
function ($scope, $http) {
 
    $scope.removeMovie = function (movie) {
        var index = $scope.movies.indexOf(movie);
        $http.delete("/api/movies/" + index).success(function (response) {
            $scope.movies = response;
        })
    }
    
    $http.get("/api/movies").success(function (response) {
        $scope.movies = response;
    })
   
});