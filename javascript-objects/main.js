var student = {
  firstName: 'Daniel',
  lastName: 'Yeh',
  age: 33
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('Full Name: ', fullName);
student.livesInIrvine = true;
student.previousOccupation = 'Clinical Lab Scientist';
console.log('livesInIrvine: ', student.livesInIrvine);
console.log('previousOccupation: ', student.previousOccupation);

var vehicle = {
  make: 'Tesla',
  model: 'Model Y',
  year: '2020'
};
vehicle['color'] = 'Black';
vehicle['isConvertible'] = false;
console.log('Color: ', vehicle['color']);
console.log('isConvertible: ', vehicle['isConvertible']);
console.log('Vehicle: ', vehicle);

var pet = {
  name: 'Tofu',
  type: 'dog'
};
delete pet.name;
delete pet.type;
console.log('Pet: ', pet);
