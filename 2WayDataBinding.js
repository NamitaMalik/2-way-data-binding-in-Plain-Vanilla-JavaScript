/**
 * Created by Namita Malik on 26/3/15.
 */

/*
 * I am here polluting the global object by making $scope as global scope variable, but this for the testing purpose
 * and sake of simplicity so that I can test from terminal
 * */
var $scope = {};
(function () {
    var bindClasses = ["name", "age"];
    var attachEvent = function (classNames) {
        classNames.forEach(function (className) {
            var elements = document.getElementsByClassName(className);
            var value;
            for (var index in elements) {
                if(elements.hasOwnProperty(index)) {
                    if(elements[index].tagName == "INPUT") {
                        elements[index].onkeyup = function () {
                            for (var index in elements) {
                                if(elements.hasOwnProperty(index)) {
                                    switch (elements[index].tagName) {
                                        case "INPUT":
                                            elements[index].value = this.value;
                                            break;
                                        default :
                                            elements[index].innerHTML = this.value;
                                            break;
                                    }
                              }
                          }
                          value = this.value;
                        }
                    }
                }
            }
            Object.defineProperty($scope, className, {
                set: function (newValue) {
                    for (var index in elements) {
                        if(elements.hasOwnProperty(index)) {
                            elements[index].value = newValue;
                        }
                    }
                    value = newValue;
                },
                get: function() {
                    return value;
                }
            });

        });
    };
    attachEvent(bindClasses);
})();
