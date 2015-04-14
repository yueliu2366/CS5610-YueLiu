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
    when('/profile', {
       templateUrl: 'views/profile/profile.html',
       controller: 'ProfileCtrl',
       resolve: {
        loggedin: checkLoggedin
         }
}).
    when('/register', {
        templateUrl: '/views/register/register.html',
        controller: 'RegisterCtrl'
    }).
    otherwise({
        redirectTo: '/home'
    });
}]);

var checkLoggedin = function ($q, $timeout, $http, $location, $rootScope) {
    var deferred = $q.defer();
    $http.get('/loggedin').success(function (user) {
        $rootScope.errorMessage = null;
        // User is Authenticated
        if (user !== '0') {
            $rootScope.currentUser = user;
            deferred.resolve();
        }
            // User is Not Authenticated
        else {
            $rootScope.errorMessage = 'You need to log in.';
            deferred.reject();
            $location.url('/login');
        }
    });
    return deferred.promise;
};