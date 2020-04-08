/*globals $:false, window:false*/
// Call to function
$("#orangeBoxId").animate({
    left: "+=200"
}, "slow", function () {
    squareMovement(this);
});

$("#stopButtonId").click(function () {
    $("#orangeBoxId").stop(true);
})

$("#startButtonId").click(function () {
    squareMovement("#orangeBoxId");
})

$("#greenBoxId").mouseenter(function () {
    var x = Math.floor(Math.random() * ($(window).width() - $("#greenBoxId").width()));
    var y = Math.floor(Math.random() * ($(window).height() - $("#greenBoxId").height()));
    $("#greenBoxId").offset({
        top: y,
        left: x
    });
})

// Declaration of function
function squareMovement(IdRef) {
    $(IdRef).delay(1000).animate({
        top: "+=100"
    }).delay(1000).animate({
        left: "+=100"
    }).delay(1000).animate({
        top: "-=100"
    }).delay(1000).animate({
        left: "-=100"
    }, function () {
        squareMovement(IdRef);
    });
}

$("div").click(function() {
    $(this).fadeOut();
})

$("#showButtonId").click(function() {
    $("div").fadeIn();
})

$(window).keydown(function(event){
    $("#orangeBoxId").stop(true);
    if(event.which === 37){
        $("#orangeBoxId").animate({left: "-=100"});
    }
    if(event.which === 38){
        $("#orangeBoxId").animate({top: "-=100"});
    }
    if(event.which == 39){
        $("#orangeBoxId").animate({left: "+=100"});
    }
    if(event.which == 40){
        $("#orangeBoxId").animate({top: "+=100"});
    }
    squareMovement("#orangeBoxId");
})