(function() {

    angular
        .module('userModule')
        .factory('dataFactory', ['$http', '$location', DataFactory]);

    function DataFactory($http, $location) {

        var idUser = '';
        var objData = {};

        var factoryData = {
            'idUser': idUser,
            'objData': objData,
            'getDataFromServer': getDataFromServer,
            'getData': getData,
            'postData': postData,
            'createData': createData,
            'sendEmailData': sendEmailData
        }

        return factoryData;

        function getDataFromServer(id) {
            $http
                .post('php/taskController.php', {
                    'userid': id,
                    'jsondat': '',
                    'control': 0
                })
                .then(function(data) {
                    var e = data.data;
                    objData = JSON.parse(e[0].textdat);
                    if ($location.url() !== '/task') {
                        checkCurrentDate(objData);
                        $location.path('/task');
                    }

                });
        }

        function sendEmailData(id) {
            //getDataFromServer(id);
            $http
                .post('php/mailController.php', {
                    'userid': id
                });
        }

        function getData() {
            return objData;
        }

        function postData(id, data) {
            var sendString = angular.toJson(data);

            $http
                .post('php/taskController.php', {
                    'userid': id,
                    'jsondat': sendString,
                    'control': 1
                });
        }

        function createData(id) {
            var newObj = [{
                'date': Date.now(),
                'currentDate': true,
                'tasks': []
            }];
            $http
                .post('php/taskController.php', {
                    'userid': id,
                    'jsondat': angular.toJson(newObj),
                    'control': 2
                });
        }

        function checkCurrentDate(data) {
            var lastObj = data[data.length - 1];
            var lastObjDate = new Date(lastObj.date);

            var currentDate = Date.now();
            var currentDateObj = new Date(currentDate);

            if ((lastObjDate.getDate() < currentDateObj.getDate()) ||
                (lastObjDate.getMonth() < currentDateObj.getMonth())) {
                lastObj.currentDate = false;
                var newObj = {
                    'date': Date.now(),
                    'currentDate': true,
                    'tasks': []
                };
                data.push(newObj);
            }
        }
    }

})();
/*
var objData = {

            '0': [{
                'date': '27/02',
                'currentDate': false,
                'tasks': [{
                        canEdit: true,
                        check: false,
                        taskText: "EPALE",
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
                ]
            }],
            '1': [{
                'date': '28/02',
                'currentDate': false,
                'tasks': []
            }],
            '2': [{
                'date': '29/02',
                'currentDate': true,
                'tasks': []
            }]
        };
var newObj = {
    '0': [{
        'date': '27/02',
        'currentDate': false,
        'tasks' : []
        }]
};

var obj = [
            {
                'date': '27/02',
                'currentDate': false,
                'tasks': [{
                        canEdit: true,
                        check: false,
                        taskText: "EPALE",
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
                ]
            },
            {
                'date': '28/02',
                'currentDate': false,
                'tasks': []
            },
            {
                'date': '29/02',
                'currentDate': true,
                'tasks': []
            }
]; 

{"0":[{"date":1490882783073,"currentDate":true,"tasks":[{"canEdit":true,"check":false,"taskText":"Hola","taskHour":1490884163242},{"canEdit":true,"check":false,"taskText":"Hacer","taskHour":1490884284720}]}]}
[{"date":1490882783073,"currentDate":true,"tasks":[{"canEdit":true,"check":false,"taskText":"Hola","taskHour":1490884163242},{"canEdit":true,"check":false,"taskText":"Hacer","taskHour":1490884284720}]}]
*/