(function() {

    angular
        .module('userModule')
        .controller('userCtrl', ['$scope', '$http', '$location', '$timeout', 'dataFactory', UserCtrl]);

    UserCtrl.$inject = ['dataFactory'];

    function UserCtrl($scope, $http, $location, $timeout, dataFactory) {

        $scope.dataFactory = dataFactory;

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
                }).then(function(data) {
                    var rec = data.data;
                    dataFactory.idUser = rec[0].id_user;
                    dataFactory.createData(dataFactory.idUser);
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
                    } else {
                        $scope.canAccess = false;
                        var rec = data.data;
                        dataFactory.idUser = rec[0].id_user;
                        dataFactory.getDataFromServer(dataFactory.idUser);



                        $location.path('/task');
                    }
                });
        }

    }

})();