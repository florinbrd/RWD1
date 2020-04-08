var document;
var exampleLine = document.getElementById("exampleLineId");
exampleLine.innerHTML = "This is just an <u>example line</u> of how innerHTML works.";

var firstField = document.getElementById("firstFieldId");
firstField.innerHTML = 15;

var firstLine = document.getElementById("firstLineId");
firstLine.innerHTML = firstLine.innerHTML + 18;

var array = ["Cat", "Dog", "Parrot"];
var secondLine = document.getElementById("secondLineId");
secondLine.innerHTML = array[0] + ", " + array[1] + ", " + array[2];

var fruits = document.getElementsByClassName("fruitClass");
fruits[0].innerHTML = "Apple";
fruits[1].innerHTML = "Banana";

var thirdLine = document.getElementById("thirdLineId");
thirdLine.innerHTML = "<u>" + thirdLine.innerHTML + "</u>";

var fourthLine = document.getElementById("fourthLineId");
var nameList = "<ul> <li>" + array[0] + "</li> <li>" + array[1] + "</li> <li>" + array[2] + "</li></ul>";
fourthLine.innerHTML = nameList;