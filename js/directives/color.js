(function() {

    angular
        .module('userModule')


    .directive("enter", function() {
        return function(scope, element) {
            element.bind("mouseenter", function() {
                element.addClass('panel');
            });
        }
    })

    .directive("leave", function() {
        return function(scope, element) {
            element.bind("mouseleave", function() {
                element.removeClass('panel');
            });
        }
    });

})();