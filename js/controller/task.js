(function() {

    angular
        .module('userModule')
        .controller('taskCtrl', ['$scope', '$interval', 'dateFactory', 'dataFactory', TaskController]);

    TaskController.$inject = ['dateFactory', 'dataFactory'];

    function TaskController($scope, $interval, dateFactory, dataFactory) {

        //Declarations
        $scope.dateFactory = dateFactory;
        $scope.dataFactory = dataFactory;

        $scope.clock = Date.now();

        //Variables
        $scope.newTask = {
            canEdit: true,
            check: false,
            taskText: "",
            taskHour: $scope.clock
        };

        //Functions
        $scope.setTask = setTask;
        $scope.deleteTask = deleteTask;
        $scope.setCheck = setCheck;
        $scope.setEdit = setEdit;

        getHour();
        $interval(getHour, 60000);

        //When text clicked delete button appears - Toggles the canEdit between true or false
        function setEdit(index) {
            index.canEdit ^= true;
        }
        //Toggles the check toggling the check variable between true or false
        function setCheck(index) {
            index.check ^= true;
        }
        //Adds a new task
        function setTask(a) {
            console.log(a);
            a.tasks.push($scope.newTask);
            $scope.newTask = {
                canEdit: true,
                check: false,
                taskText: "",
                taskHour: ""
            };

        }

        function deleteTask(a, index) {
            var i = a.tasks.indexOf(index);
            a.tasks.splice(i, 1);
        }

        function getHour() {
            $scope.clock = Date.now();
        }

    }




})();