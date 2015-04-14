var app = angular.module("MovieApp", ['ngRoute']);
app.config(['$routeProvider',
function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: '/views/home/home.html'
    }).
    when('/login', {
        templateUrl: '/views/login/login.html',
        controller: 'LoginCtrl'
    }).
    when('/register', {
        templateUrl: '/views/register/register.html',
        controller: 'RegisterCtrl'
    }).
    when('/profile', {
        templateUrl: '/views/profile/profile.html',
    }).
    otherwise({
        redirectTo: '/home'
    });
}]);