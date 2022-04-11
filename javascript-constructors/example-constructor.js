function ExampleConstructor() {

}
console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);

var aConstructor = new ExampleConstructor();
console.log(aConstructor);
var check = aConstructor instanceof ExampleConstructor;
console.log(check);
