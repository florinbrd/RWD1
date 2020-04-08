var document;
var listItemArray = document.getElementsByTagName("li");
var colorArray = ["red", "green", "blue", "black", "white"];
var myDate = new Date();
var oldDate = new Date(2015, 1, 1);
var count1 = 0;
var count2 = 0;
var timer = 0;

listItemArray[0].innerHTML = listItemArray[0].innerHTML + " " + add_two_numbers(5, 7);
listItemArray[1].innerHTML = listItemArray[1].innerHTML + "<br>Numbers are: 5, 6, 8: "
    + "The function output is: " + multiply_three_number(5, 6, 8);
listItemArray[2].innerHTML = listItemArray[2].innerHTML + "<br>Radius is: 5: "
    + "The func{tion output is: " + area_of_a_circle(5);
listItemArray[3].style.color = colorArray[choose_a_number(colorArray.length)];
listItemArray[4].innerHTML = listItemArray[4].innerHTML + "<br>The difference is: "
    + Math.floor(difference_between_days(myDate, oldDate));
listItemArray[5].innerHTML = listItemArray[5].innerHTML + "<br>The difference is: "
    + odd_or_even(difference_between_days(myDate, oldDate));

timedcount();

//Write your function declarations below this line
function add_two_numbers(n1, n2) {
    return n1 + n2;
}

function multiply_three_number(n1, n2, n3) {
    return n1 * n2 * n3;
}

function area_of_a_circle(r) {
    return Math.PI * r * r;
}

function choose_a_number(n) {
    return Math.floor(Math.random() * n);
}

function difference_between_days(d1, d2) {
    return (d1 - d2) / (1000 * 60 * 60 * 24);
}

function odd_or_even(n) {
    if (n % 2 === 0) {
        return "odd";
    }
    else {
        return "even";
        }
}

function timedcount() {
    if(timer % 2 == 0){
        count2 = count2 + 2;
        document.getElementById("counter2Id").innerHTML = "" + count2;
    }
    count1++;
    document.getElementById("counter1Id").innerHTML = "" + count1;
    timer++;
    if(timer < 10) {
        setTimeout(timedcount, 1000);
    }
}