function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
console.log('convertMinutesToSeconds', convertMinutesToSeconds(5));

function greet(name) {
  var hello = 'Hello, ' + name;
  return hello;
}
console.log('Greeting function:', greet('Raymond'));

function getArea(width, height) {
  var multiple = width * height;
  return multiple;
}
console.log('Area Function:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
console.log('First Name function:', getFirstName({ firstName: 'Tofu', lastName: 'Yeh' }));

function getLastElement(array) {
  return array[array.length - 1];
}
console.log('Last Element:', getLastElement(['propane', 'and', 'propane', 'accessories']));
