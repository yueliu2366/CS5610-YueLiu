﻿var app = angular.module("MoviesApp", []);
app.controller("MovieController",
function ($scope, $http) {
  
    $scope.removeMovie = function (id) {
       // var index = website._id;
        $http.delete("/api/websites/" + id).success(function (response) {
            $scope.websites = response;
        })
    }

    $scope.addMovie = function () {
        var newMovie = {
            name: $scope.website.name,
        };
        $http.post("/api/websites", newMovie).success(function (response) {
            $scope.websites = response;
        })
    }

    $http.get("/api/websites").success(function (response) {
        $scope.websites = response;
    })
   
});