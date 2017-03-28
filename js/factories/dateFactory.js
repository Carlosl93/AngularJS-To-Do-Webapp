(function() {

    angular
        .module('userModule')
        .factory('dateFactory', DateFactory);

    function DateFactory() {

        var objDate = new Date();
        var h = correctZeroes(objDate.getHours());
        var m = correctZeroes(objDate.getMinutes());
        var currentDate = correctZeroes(objDate.getDate()) + "/" + correctZeroes(objDate.getMonth());
        var currentHour = h + '/' + m;

        var dateObj = {
            currentDate: currentDate,
            currentHour: h,
            currentMinute: m,
            checkHour: checkHour
        };

        return dateObj;


        //Checks if the length of the parameter is 1 and returns a string completing the zeroes
        function correctZeroes(dateString) {
            var stringToCheck = dateString.toString();
            return (stringToCheck.length === 1) ? "0" + stringToCheck : stringToCheck;
        }

        function checkHour() {
            console.log('hey');
            console.log(h);
            console.log(m);
            h = correctZeroes(objDate.getHours());
            m = correctZeroes(objDate.getMinutes());

            setTimeout(checkHour, 60000);
        }

    }

})();