(function() {

    angular
        .module('userModule')
        .factory('dataFactory', ['$http', DataFactory]);

    function DataFactory($http) {

        var idUser = '';
        var objData = {};

        var factoryData = {
            'idUser': idUser,
            'objData': objData,
            'getDataFromServer': getDataFromServer,
            'getData': getData
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

                });
        }

        function getData() {
            return objData;
        }

        function postData(id, data) {
            var sendString = JSON.stringify(data);

            $http
                .post('php/taskController.php', {
                    'userid': id,
                    'jsondat': sendString,
                    'control': 1
                });
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
*/