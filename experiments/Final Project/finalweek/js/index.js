var app = angular.module("BookStoreApp", ['ngRoute']);
app.config(['$routeProvider',
function ($routeProvider) {
    $routeProvider.
    when('/landing', {
        //templateUrl: '/views/home/home.html'
        templateUrl: '/views/landing/landing.html',
        controller: 'LandingCtrl'
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
   when('/profile_for_selected_user', {
       templateUrl: 'views/selected_profile/selected_profile.html',
       controller: 'selectedProfileCtrl',
   }).
    when('/register', {
        templateUrl: '/views/register/register.html',
        controller: 'RegisterCtrl'
    }).
    when('/search', {
        templateUrl: '/views/search/search.html',
        controller: 'SearchCtrl'
    }).
    when('/booklist', {
        templateUrl: '/views/booklist/booklist.html',
        controller: 'BooklistCtrl'
    }).
    when('/carousel-example-generic', {
        templateUrl: '/views/booklist/booklist.html',
        controller: 'BooklistCtrl'
    }).
    when('/bookitem',{
        templateUrl: '/views/bookitem/bookitem.html',
        controller: 'BookItemCtrl'
    }).
    when('/favorite',{
        templateUrl: '/views/favorite/favorite.html',
        controller: 'FavoriteCtrl'
    }).
    when('/follow',{
        templateUrl: '/views/follow/follow.html',
        controller: 'FollowCtrl'
    }).
    otherwise({
        redirectTo: '/landing'
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