/**
 * Created by namita on 26/3/15.
 */

var updateValue = function (value) {
    var elements = document.getElementsByClassName("name")
    for(var index in elements ){
        elements[index].value = value;
    }
};