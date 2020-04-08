/*globals $:false*/
$("#exampleButtonId").on("click", function () {
    var attributeContent = $("#imageId").attr("src");
    $(this).text(attributeContent);
});

$("#fontSizeChangeButtonId").click(function () {
    $("h2").css("font-size", "40px");
});

$("#textButtonId").click(function () {
    $(this).text("I've been clicked");
});

$("#imageId").click(function () {
    var src = $(this).attr("src");
    if (src !== "images/glad.jpg") {
        $(this).attr("src", "images/glad.jpg");
    } else {
        $(this).attr("src", "images/sad.jpg");
    }
});

$("u").click(function () {
    if ($(this).text() === "NOT") {
        $(this).text("NEVER");
    } else {
        $(this).text("NOT");
    }
});

$("li").click(function () {
    var value = $(this).attr("value");
    $("#spanFieldId").text(value);
});

$("body").click(function (event) {
    var x = event.pageX;
    $("#xcoordId").text(x);
    var y = event.pageY;
    $("#ycoordId").text(y);
});

function changeColor(id) {
    var colors = ["blue", "red", "yellow", "green"];
    var number = Math.floor(Math.random() * colors.length);
    $(id).css("background-color", colors[number]);
}

$("#colorBox1Id").mouseenter(function () {
    changeColor(this);
    $("#colorBox2Id").css("background-color", "green");
});

$("#colorBox1Id").mouseleave(function () {
    $("#colorBox2Id").css("background-color", "black");
})

$("#textFieldId").keydown(function () {
    changeColor("#colorBox1Id");
})