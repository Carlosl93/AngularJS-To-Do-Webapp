(function() {

    angular
        .module('userModule', ['ngRoute'])
        .config(['$routeProvider', RouteProvider]);

    function RouteProvider($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'view/login.html'
            })
            .when('/register', {
                templateUrl: 'view/register.html'
            })
            .when('/task', {
                templateUrl: 'view/task.html'
            })
            .otherwise({
                redirectTo: '/login'
            });
    }

})();