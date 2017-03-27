(function() {

    angular
        .module('userModule')
        .factory('dateService', DateService);

    function DateService() {

        var objDate = new Date();
        var currentDate = correctZeroes(objDate.getDate()) + "/" + correctZeroes(objDate.getMonth());
        var currentHour = correctZeroes(objDate.getHours()) + ":" + correctZeroes(objDate.getMinutes());

        var dateObj = {
            currentDate: currentDate,
            currentHour: currentHour
        };

        return dateObj;


        //Checks if the length of the parameter is 1 and returns a string completing the zeroes
        function correctZeroes(dateString) {
            var stringToCheck = dateString.toString();
            return (stringToCheck.length === 1) ? "0" + stringToCheck : stringToCheck;
        }

    }

})();