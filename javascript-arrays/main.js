var colors = ['red', 'white', 'blue'];
console.log('colors[0]: ', colors[0]);
console.log('colors[1]: ', colors[1]);
console.log('colors[2]: ', colors[2]);
var string = colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log('America is', string);
colors[2] = 'green';
var stringTwo = colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log('Mexico is', stringTwo);
console.log('colors: ', colors);

var students = ['pearl', 'tiffany', 'daniel', 'wilson'];
var numberOfStudents = students.length;
console.log('There are', numberOfStudents, 'students in the class.');
var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('The last student in the array is', lastStudent);
console.log('students:', students);
