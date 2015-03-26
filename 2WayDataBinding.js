/**
 * Created by Namita Malik on 26/3/15.
 */
var attachEvent = function (classNames) {
    classNames.forEach(function (className) {
        var elements = document.getElementsByClassName(className);
        for (var index in elements) {
            elements[index].onkeyup = function () {
                for (var index in elements) {
                    elements[index].value = this.value;
                }
            }
        }
    });
};
attachEvent(["name", "age"]);