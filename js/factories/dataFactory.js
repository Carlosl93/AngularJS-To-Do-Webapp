(function() {

    angular
        .module('userModule')
        .factory('dataFactory', DataFactory);

    function DataFactory() {

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



        return objData;

    }

})();
/*
var objData = {

    '0':

        [{
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
    ],

    '1':

        [{
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
        },
        {
            canEdit: true,
            check: false,
            taskText: "Nose nada",
            taskHour: "05:40 PM"
        }
    ]




};
*/