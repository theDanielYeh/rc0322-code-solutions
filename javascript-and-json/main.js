var newArray = [
  {
    isbn: '0001',
    title: 'The First Book',
    author: 'Elon Musk 1'
  },
  {
    isbn: '0002',
    title: 'The Second Book',
    author: 'Elon Musk 2'
  },
  {
    isbn: '0003',
    title: 'The Three Book',
    author: 'Elon Musk 3'
  }
];

console.log('typeof: ', typeof newArray);

JSON.stringify(newArray);
console.log('stringify: ', JSON.stringify(newArray));
console.log('stringify typeof: ', typeof JSON.stringify(newArray));

var newString = '{"Number ID": "1234", "String name": "Elon"}';
console.log('newString: ', newString);
console.log('newString typeof: ', typeof newString);

JSON.parse(newString);
console.log('newString Parse: ', JSON.parse(newString));
console.log('newString typeof: ', typeof JSON.parse(newString));
