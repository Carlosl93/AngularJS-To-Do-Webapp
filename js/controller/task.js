(function() {

    angular
        .module('userModule')
        .controller('taskCtrl', ['$scope', 'dateService', TaskController]);

    TaskController.$inject = ['dateService'];

    function TaskController($scope, dateService) {

        //Declarations
        $scope.dateService = dateService;

        //Variables
        $scope.newTask = {
            canEdit: true,
            canEditTask: true,
            check: false,
            taskText: "",
            taskHour: dateService.currentHour
        };

        $scope.taskData = [{
                canEdit: true,

                check: false,
                taskText: "Leer un capitulo del libro",
                taskHour: "04:32 PM"
            },
            {
                canEdit: true,

                check: true,
                taskText: "Comer McDonalds",
                taskHour: "05:04 PM"
            },
            {
                canEdit: true,

                check: false,
                taskText: "Practicar Angular",
                taskHour: "05:40 PM"
            }
        ];
        //Functions
        $scope.setTask = setTask;
        $scope.deleteTask = deleteTask;
        $scope.editTask = editTask;
        $scope.setEditTask = setEditTask;
        $scope.setCheck = setCheck;
        $scope.setEdit = setEdit;


        function setEdit(index) {
            index.canEdit ^= true;
        }

        function setCheck(index) {
            index.check ^= true;
        }

        function setTask() {
            $scope.taskData.push($scope.newTask);
            $scope.newTask = {
                canEdit: true,
                check: false,
                taskText: "",
                taskHour: dateService.currentHour
            };

        }

        function deleteTask(index) {
            var i = vm.taskData.indexOf(index);
            $scope.taskData.splice(i, 1);
        }

        function editTask(index) {

        }

        function setEditTask(index) {
            index.canEditTask ^= true;
        }
    }




})();