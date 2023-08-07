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

//Functions

const appendNumber = function () {
  result.textContent += this.textContent;
};

const appendDot = function () {
  if (!result.textContent.includes(".")) {
    result.textContent += ".";
  } else {
    window.alert("Only one dot is eligable!");
  }
};

const allClearFoo = function () {
  result.textContent = "";
};

const clearFoo = function () {
  result.textContent = result.textContent.slice(0, -1);
};

//Selectors

const dot = document.querySelector("#dot");
const numberZero = document.querySelector("#numZero");
const numberOne = document.querySelector("#numOne");
const numberTwo = document.querySelector("#numTwo");
const numberThree = document.querySelector("#numThree");
const numberFour = document.querySelector("#numFour");
const numberFive = document.querySelector("#numFive");
const numberSix = document.querySelector("#numSix");
const numberSeven = document.querySelector("#numSeven");
const numberEight = document.querySelector("#numEight");
const numberNine = document.querySelector("#numNine");
const result = document.querySelector(".screen-result");
const allClear = document.querySelector("#allClear");
const clear = document.querySelector("#clear");

//Event listeners

numberZero.addEventListener("click", appendNumber);
numberOne.addEventListener("click", appendNumber);
numberTwo.addEventListener("click", appendNumber);
numberThree.addEventListener("click", appendNumber);
numberFour.addEventListener("click", appendNumber);
numberFive.addEventListener("click", appendNumber);
numberSix.addEventListener("click", appendNumber);
numberSeven.addEventListener("click", appendNumber);
numberEight.addEventListener("click", appendNumber);
numberNine.addEventListener("click", appendNumber);
dot.addEventListener("click", appendDot);
allClear.addEventListener("click", allClearFoo);
clear.addEventListener("click", clearFoo);

// start implementing functions for operators
