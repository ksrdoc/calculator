"use strict";

//Operator variables

let firstNumber = "";
let secondNumber = "";
let operator = "";
let localSum = "";

// Operations

const addition = function (a, b) {
  return Math.round((a + b) * 100) / 100;
};

const substraction = function (a, b) {
  return Math.round((a - b) * 100) / 100;
};

const multiply = function (a, b) {
  return Math.round(a * b * 100) / 100;
};

const division = function (a, b) {
  return Math.round((a / b) * 100) / 100;
};

const remainder = function (a, b) {
  return Math.round((a % b) * 100) / 100;
};

const operate = function (firstNumber, operator, secondNumber) {
  let a = Number(firstNumber);
  let b = Number(secondNumber);
  switch (operator) {
    case "+":
      return addition(a, b);
    case "-":
      return substraction(a, b);
    case "x":
      return multiply(a, b);
    case "÷":
      if (b === 0) return null, alert("LOL no");
      else return division(a, b);
    case "%":
      return remainder(a, b);
    default:
      return null;
  }
};

//Functions

const hoverDarken = function () {
  this.classList.toggle("hoverDarken");
};

const appendNumber = function () {
  result.textContent += Number(this.textContent);
};

/*const appendNumberKey = (e) => {
  console.log("hey");
  e.key === "1"
    ? console.log("heyhey")
    : (result.textContent += Number(this.textContent)); 
}; */

const appendDot = function () {
  if (!result.textContent.includes(".")) {
    result.textContent += ".";
  } else {
    window.alert("Only one dot is eligable!");
  }
};

const allClearFoo = function () {
  result.textContent = "";
  lastResult.textContent = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
};

const clearFoo = function () {
  result.textContent = result.textContent.slice(0, -1);
};

const calculate = function () {
  if (lastResult.textContent === "") {
    // this can be put in a function no prob
    lastResult.textContent = `${result.textContent} ${this.textContent}`;
    firstNumber = Number(result.textContent);
    result.textContent = "";
    operator = this.textContent;
    localSum = firstNumber;
  } else if (lastResult.textContent.includes("=")) {
    firstNumber = Number(result.textContent);
    localSum = firstNumber;
    secondNumber = "";
    lastResult.textContent = `${this.textContent} ${firstNumber}`;
    result.textContent = "";
    operator = this.textContent;
  } else {
    lastResult.textContent = "";
    secondNumber = Number(result.textContent);
    lastResult.textContent = `${this.textContent} ${operate(
      localSum,
      this.textContent,
      secondNumber
    )}`;
    localSum = operate(localSum, this.textContent, secondNumber);
    operator = this.textContent;
    result.textContent = "";
    secondNumber = "";
    firstNumber = Number(localSum);
  }
};

const equasion = function () {
  if (lastResult.textContent.includes("=") === true) {
    console.log("Calculation is done");
  } else {
    secondNumber = Number(result.textContent);
    lastResult.textContent = `${firstNumber} ${operator} ${secondNumber} =`;
    result.textContent = "";
    result.textContent = operate(firstNumber, operator, secondNumber);
    secondNumber = "";
    localSum = Number(result.textContent);
    firstNumber = localSum;
  }
};

//Selectors

const dot = document.querySelector("#dot");
const result = document.querySelector(".screen-result");
const lastResult = document.querySelector(".screen-last");
const allClear = document.querySelector("#allClear");
const clear = document.querySelector("#clear");
const equalKey = document.querySelector("#equal");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");

//Event listeners

numbers.forEach((number) => number.addEventListener("click", appendNumber));
numbers.forEach((number) => number.addEventListener("mouseover", hoverDarken));
numbers.forEach((number) => number.addEventListener("mouseleave", hoverDarken));

operators.forEach((operator) => operator.addEventListener("click", calculate));
operators.forEach((operator) =>
  operator.addEventListener("mouseover", hoverDarken)
);
operators.forEach((operator) =>
  operator.addEventListener("mouseleave", hoverDarken)
);

dot.addEventListener("click", appendDot);
dot.addEventListener("mouseover", hoverDarken);
dot.addEventListener("mouseleave", hoverDarken);
allClear.addEventListener("click", allClearFoo);
allClear.addEventListener("mouseover", hoverDarken);
allClear.addEventListener("mouseleave", hoverDarken);
clear.addEventListener("click", clearFoo);
clear.addEventListener("mouseover", hoverDarken);
clear.addEventListener("mouseleave", hoverDarken);
equalKey.addEventListener("click", equasion);
equalKey.addEventListener("mouseover", hoverDarken);
equalKey.addEventListener("mouseleave", hoverDarken);
