const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  return nums.reduce((accumulator, current) => {
    accumulator+= current;
    return accumulator;
  }, 0);
};

const multiply = function(nums) {
  return nums.reduce((accumulator, current) => {
    accumulator*= current;
    return accumulator;
  });
};

const power = function(base, exponent) {
  let value = 1;
  for (let i = 0; i < exponent; ++i) {
    value*= base;
  }
  return value;
};

const factorial = function(num) {
	let value = 1;
  for (let i = 1; i <= num; ++i) {
    value*= i;
  }
  return value;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
