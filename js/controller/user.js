(function() {

    angular
        .module('userModule')
        .controller('userCtrl', ['$scope', '$http', UserCtrl]);

    function UserCtrl($scope, $http) {

        $scope.canAccess = false;
        $scope.registerUser = registerUser;
        $scope.loginUser = loginUser;


        function registerUser() {
            $http
                .post('php/userController.php', {
                    'user': $scope.user,
                    'pass': $scope.pass,
                    'email': $scope.email,
                    'control': 0
                });
        }

        function loginUser() {
            $http
                .post('php/userController.php', {
                    'user': $scope.user,
                    'pass': $scope.pass,
                    'control': 1
                })
                .then(function(data) {
                    if (data.data == '0') {
                        $scope.canAccess = true;
                        console.log(data);
                    } else {
                        $scope.canAccess = false;
                    }
                });
        }

    }

})();