const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(e => e % 2 === 0);
console.log(evenNumbers);

const overFive = numbers.filter(e => e > 5);
console.log(overFive);

const startWithE = names.filter(e => e.startsWith('E'));
console.log(startWithE);

const haveD = names.filter(e => e.includes('d') || e.includes('D'));
console.log(haveD);
