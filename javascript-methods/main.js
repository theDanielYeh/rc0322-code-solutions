// Math Object
var numOne = 1;
var numTwo = 5;
var numThree = 10;
var maximumValue = Math.max(numOne, numTwo, numThree);
console.log('maximumValue:', maximumValue);

var heroes = ['thor', 'batman', 'spiderman', 'dad]'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

// Array Methods
var library = [
  {
    title: 'Harry Potter',
    author: 'JK Rowling'
  },
  {
    title: 'The Great Gatsby',
    author: 'Fitzgerald'
  },
  {
    title: 'Tesla',
    author: 'Elon Musk'
  }
];
var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library', library);

// String Methods
var fullName = 'Daniel Yeh';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
