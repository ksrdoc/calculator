"use strict";

//Operator variables

let firstNumber = "";
let secondNumber = "";
let operator = "";

// Operations

const addition = function (a, b) {
  return a + b;
};

const substraction = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const division = function (a, b) {
  return a / b;
};

const operate = function (firstNumber, operator, secondNumber) {
  a = Number(firstNumber);
  b = Number(secondNumber);
  switch (operator) {
    case "+":
      return addition(a, b);
    case "-":
      return substraction(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b === 0) return null;
      else return division(a, b);
    default:
      return null;
  }
};
