(function() {

    angular
        .module('userModule')
        .controller('mailCtrl', ['$scope', 'dataFactory', MailController]);

    MailController.$inject = ['dataFactory'];

    function MailController($scope, dataFactory) {
        $scope.sendMail = sendMail;
        $scope.dataFactory = dataFactory;

        function sendMail() {
            dataFactory.sendEmailData(dataFactory.idUser);
        }
    }

})();