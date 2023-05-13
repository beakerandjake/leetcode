// find the numbers divisors, from 1 to sqrt(n)

const square = (number) => number * number;

const dividesEvenly = (a, b) => a % b === 0;

const findDivisor = (number, divisor) => {
  if (square(divisor) > number) {
    return number;
  }
  return dividesEvenly(number, divisor) ? divisor : findDivisor(number, divisor + 1);
};

export const isPrime = (number) => {
  return number === findDivisor(number, 2);
};
