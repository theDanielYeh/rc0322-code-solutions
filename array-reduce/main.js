const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((a, b) => a + b);
console.log(sum);

const product = numbers.reduce((a, b) => a * b);
console.log(product);

const balance = account.reduce((a, b) => b.type === 'deposit' ? a + b.amount : a - b.amount, 0);
// const balance = account.reduce((a, b) => {
//   if (b.type === 'deposit') {
//     return a + b.amount;
//   } else {
//     return a - b.amount;
//   }
// }, 0);
console.log(balance);

const composite = traits.reduce((a, b) => Object.assign(a, b));
console.log(composite);
