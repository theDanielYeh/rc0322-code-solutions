const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(e => e * 2);
console.log(doubled);

const prices = numbers.map(e => e.toLocaleString('en-US',
  { style: 'currency', currency: 'USD' }
));
console.log(prices);

const upperCased = languages.map(e => e.toUpperCase());
console.log(upperCased);

const firstLetters = languages.map(e => e[0]);
console.log(firstLetters);
