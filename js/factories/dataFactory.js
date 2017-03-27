(function() {

    angular
        .module('userModule')
        .factory('dataFactory', DataFactory);

    function DataFactory() {

        this.objData = {

            '0':

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
                }
            ]




        };



        return objData;

    }

})();