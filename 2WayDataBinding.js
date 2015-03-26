/**
 * Created by namita on 26/3/15.
 */
var a = [];
var updateValue = function(){
    test = document.getElementById("name").value;
    console.log(test);
    a = document.getElementsByClassName("bind")
    a[0].value = test;
};