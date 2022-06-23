// < !--codewars: Reversed Strings 8kyu-- >
//   Complete the solution so that it reverses the string passed into it.

// 'world' => 'dlrow'
// 'word' => 'drow'

function solution(str) {
  return str.split('').reverse().join('');
}

//
// Your task is to make a function that can take any non - negative integer as an argument and return it with its digits in descending order.Essentially, rearrange the digits to create the highest possible number.

//   Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  return parseInt(String(n).split('').sort().reverse().join(''))
}
