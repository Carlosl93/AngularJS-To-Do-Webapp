(function() {

    angular
        .module('userModule')
        .controller('taskCtrl', ['$scope', '$interval', 'dateFactory', 'dataFactory', TaskController]);

    TaskController.$inject = ['dateFactory', 'dataFactory'];

    function TaskController($scope, $interval, dateFactory, dataFactory) {

        //Declarations
        $scope.dateFactory = dateFactory;
        $scope.dataFactory = dataFactory;

        $scope.data = dataFactory.getData();

        //Variables
        $scope.newTask = {
            canEdit: true,
            check: false,
            taskText: "",
            taskHour: Date.now()
        };

        //Functions
        $scope.setTask = setTask;
        $scope.deleteTask = deleteTask;
        $scope.setCheck = setCheck;
        $scope.setEdit = setEdit;

        $scope.clock = Date.now();
        getHour();
        $interval(getHour, 1000);


        /*_____TASK FUNCTIONS_____*/
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
            a.tasks.push($scope.newTask);
            $scope.newTask = {
                canEdit: true,
                check: false,
                taskText: "",
                taskHour: Date.now()
            };
            dataFactory.postData(dataFactory.idUser, $scope.data);

        }

        function deleteTask(a, index) {
            var i = a.tasks.indexOf(index);
            a.tasks.splice(i, 1);
            dataFactory.postData(dataFactory.idUser, $scope.data);
        }


        /*_____TIME FUNCTIONS_____*/
        function getHour() {
            $scope.clock = Date.now();
        }

    }




})();