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


  $("form#multiply").submit(function(event){
    event.preventDefault();
    var multiplyNumber1 = parseInt($("#multiply1").val());
    var multiplyNumber2 = parseInt($("#multiply2").val());
    var multiplyResult = multiply(multiplyNumber1, multiplyNumber2);
    $("#multiplyOutput").text(multiplyResult);
  })


  $("form#divide").submit(function(event){
    event.preventDefault();
    var divideNumber1 = parseInt($("#divide1").val());
    var divideNumber2 = parseInt($("#divide2").val());
    var divideResult = divide(divideNumber1, divideNumber2);
    $("#divideOutput").text(divideResult);
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