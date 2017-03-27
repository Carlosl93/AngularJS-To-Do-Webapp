(function() {

    angular
        .module('userModule')
        .controller('dateCtrl', ['$scope', 'dateService', DateController]);

    DateController.$inject = ['dateService'];

    function DateController($scope, dateService) {
        $scope.dateService = dateService;
    }

})();