var app = angular.module("MoviesApp", []);
app.controller("MovieController",
function ($scope, $http) {

    $scope.removeMovie = function (movie) {
        var index = $scope.movies.indexOf(movie);
        $http.delete("/api/movies/" + index).success(function (response) {
            $scope.movies = response;
        })
    }
    
    $scope.addMovie = function () {
        var newMovie = {
            title: $scope.movie.title,
            rating: $scope.movie.rating,
            year: $scope.movie.year,
            plot: $scope.movie.plot
        };
        $http.post("/api/movies", newMovie).success(function (response) {
            $scope.movies = response;
        })
    }

    $http.get("/api/movies").success(function (response) {
        $scope.movies = response;
    })
   
});