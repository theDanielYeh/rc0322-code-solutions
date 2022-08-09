// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  return number % 2 === 0 ? 8 * number : 9 * number;
}

function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}
