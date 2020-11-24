# 2 Way Data Binding in Plain Vanilla JavaScript


Whenever someone asks me about the advantages of **AngularJS** the first thing that simply comes into my mind is **2-way data binding**.

For those who still aren't aware about it, **2-way data binding** means when you change anything in your model, view gets updated and on changing anything in the view, model gets updated.

Everyone who knows **Angular**(having worked on it) or in fact has worked upon any other **JavaScript** framework(missed working on it) would actually know the beauty of this feature.

Well, now let's try to simply implement this feature in pur own plain vanilla **JavaScript**.

Let us take 4 text boxes to easily demonstrate **2-way data binding**. Here is our small piece of **HTML** code:

```HTML
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>2 Way Data Binding</title>
</head>
<body>
Name: <input class="name" type="text">
<input class="name" type="text">
<hr />
Age: <input class="age" type="text">
<input class="age" type="text">
<script src="2WayDataBinding.js"></script>
</body>
</html>
```
Now, let's have a look at our magical **JavaScript** code which will do wonders for us:

```JavaScript
var $scope = {};
(function () {
    var bindClasses = ["name", "age"];
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
            Object.defineProperty($scope, className, {
                set: function (newValue) {
                    for (var index in elements) {
                        elements[index].value = newValue;
                    }
                }
            });
        });
    };
    attachEvent(bindClasses);
})();
```
Here is a detailed explanation of the above snippet:

1. We have taken the classes of the elements on which we need to apply **2-way Data Binding** in an array named ```bindClasses```.

2. Then we have an ```attachEvent``` which basically iterates through the classes passed in array ```bindClasses```.

3.  We are extracting all the elements by using their class names ```document.getElementsByClassName(className)```.

4. Once the elements are extracted we are binding ```onkeyup``` event on it. When this event is triggered it calls a function which stores the current value inside the element.

In this way we are successfully able to implement **2-way Data Binding** on our HTML.

But how to update our **model**??

Here is the explanation of the rest of the part of the code which actually updates the value in our model:

1. We have used ```object.defineProperty``` to define a property of an object. Here our object is **$scope** and property is **className**.

2. Then we have a **set** function which serves as **setter** of the property.

3. So, if you do something like - ```$scope.name="Hari"```, "Hari" would be passed as ```newValue```, which would ultimately replace the value being displayed on the view through the following piece of code ```elements[index].value = newValue```.

Hurray!! We have now implemented the **2-way Data Binding** successfully.

| Please note that this is just a small piece of code demonstrating **2-way Data Binding** using **JavaScript** this code can be improved a lot on the basis of element type.e We can also have a **getter** function for getting the value in ```$scope.name```. But for the sake of simplicity I have deliberately avoided it.

Follow Me
---
[Github](https://github.com/NamitaMalik)

[Twitter](https://twitter.com/namita13_04)

[LinkedIn](https://in.linkedin.com/in/namita-malik-a7885b23)

[More Blogs By Me](https://namitamalik.github.io/)