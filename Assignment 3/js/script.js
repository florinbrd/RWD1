/*globals $:false, window:false, document:false*/
/* Animations */
// Initialise fish movement
moveFish1();
moveFish2();

// Event-handler for clicking on the window (moving fish 1)
$(window).click(function (event) {
    $("#fish1Id").stop(true);
    $("#fish1Id").animate({
        left: event.pageX - (1 / 2 * $("#fish1Id").width()),
        top: event.pageY - (1 / 2 * $("#fish1Id").height())
    });
    moveFish1();
});

// Event-handler for double-clicking fish 1, resizing it
$("#fish1Id").dblclick(function () {
    $(this).stop(true);
    $(this).animate({
        width: 400,
        height: 400
    }).delay(2000).animate({
        width: 200,
        height: 200
    });
    moveFish1();
});

// Event-handler for fish 2, checking if the mouse is entering it.
// This will make fish 2 'flee' when you hover over it
$("#fish2Id").mouseenter(function () {
    $("#fish2Id").stop(true);
    var xCoord = Math.floor(Math.random() * ($(window).width() - $(this).width()));
    var yCoord = Math.floor(Math.random() * ($(window).height() - $(this).height()));
    $("#fish2Id").animate({
        top: yCoord,
        left: xCoord
    });
    moveFish2();
});

// Initialize bubble movement
moveBubble1();
moveBubble2();
moveBubble3();

// Create event-handlers for clicking the bubbles
$("#bubble1Id").click(function() {
    $(this).stop(true);
    $(this).fadeOut(500);
    $(this).offset({
        top: $(window).height()
    })
    $(this).fadeIn(500);
    moveBubble1();
})

$("#bubble2Id").click(function() {
    $(this).stop(true);
    $(this).fadeOut(500);
    $(this).offset({
        top: $(window).height()
    })
    $(this).fadeIn(500);
    moveBubble2();
})

$("#bubble3Id").click(function() {
    $(this).stop(true);
    $(this).fadeOut(500);
    $(this).offset({
        top: $(window).height()
    })
    $(this).fadeIn(500);
    moveBubble3();
})

// Functions below here
// Function for fish 1's stand-by animation
function moveFish1() {
    var height = ($(document).height() - $("#fish1Id").height());
    var width = ($(document).width() - $("#fish1Id").width());
    var array_height = [0, height];
    var widtha = Math.floor(Math.random() * width);
    var heights = Math.floor(Math.random() * height);
    $("#fish1Id").animate({
        left: widtha,
        top: heights
    }, 7000, "linear", moveFish1);
}
// Function for fish 2's stand-by animation
function moveFish2() {
    var height = ($(document).height() - $("#fish2Id").height());
    var width = ($(document).width() - $("#fish2Id").width());
    var array_height = [0, height];
    var widtha = Math.floor(Math.random() * width);
    var heights = Math.floor(Math.random() * height);
    $("#fish2Id").animate({
        left: widtha,
        top: heights
    }, 7000, "linear", moveFish2);
}

// A random function with a parameter, setting the bound
function random(bound) {
    return Math.floor(Math.random() * bound);
}

// Functions to move the bubbles (individually)
function moveBubble1() {
    $("#bubble1Id").animate({
        top: 0 - $("#bubble1Id").height()
    }, random(5) * 1000, function () {
        var xCoord = Math.floor(Math.random() * ($(window).width() - $(this).width()));
        $(this).offset({
            left: xCoord,
            top: $(window).height()
        }, moveBubble1());
    });
}

function moveBubble2() {
    $("#bubble2Id").animate({
        top: 0  - $("#bubble2Id").height()
    }, random(10) * 1000, function () {
        var xCoord = Math.floor(Math.random() * ($(window).width() - $(this).width()));
        $(this).offset({
            left: xCoord,
            top: $(window).height()
        }, moveBubble2());
    });
}

function moveBubble3() {
    $("#bubble3Id").animate({
        top: 0 - $("#bubble3Id").height()
    }, random(20) * 1000, function () {
        var xCoord = Math.floor(Math.random() * ($(window).width() - $(this).width()));
        $(this).offset({
            left: xCoord,
            top: $(window).height()
        }, moveBubble3());
    });
}