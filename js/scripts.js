//back-end logic
var add = function(number1, number2){
    return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

//UI Logic
$(document).ready(function(){

  $("form#add").submit(function(event){

    event.preventDefault();
    var addNumber1 = parseInt($("#add1").val());
    var addNumber2 = parseInt($("#add2").val());
    var addResult = add(addNumber1, addNumber2);
    $("#addOutput").text(addResult);

  });


  $("form#subtract").submit(function(event){

    event.preventDefault();
    var subtractNumber1 = parseInt($("#subtract1").val());
    var subtractNumber2 = parseInt($("#subtract2").val());
    var subtractResult = subtract(subtractNumber1, subtractNumber2);
    $("#subtractOutput").text(subtractResult);

  })

});


/*
var number1 = parseInt(prompt("Enter a number: "));

var number2 = parseInt(prompt("Enter another number: "));

var result = subtract(number1, number2);


alert(result);

BMI Calulator
var height = parseInt(prompt("Enter your heights in inches: "));
var weight = parseInt(prompt("Enter your weight with pounds: "));
var BMI    = ( weight / (height * height)) * 703;

alert(BMI);
*/