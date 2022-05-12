/* exported defaults */
function defaults(target, source) {
  // var array = Object.entries(target);
  // console.log(array);
  // console.log(array[0].includes('foo'));
  for (var $property in source) {
    var x = 0;
    for (var $prop2 in target) {
      if ($property === $prop2) {
        x += 1;
      }
    }
    if (x === 0) {
      target[$property] = source[$property];
    }
  }

}

// loop through source object and compare (find if an object methods exists for this) to target object. if no exist, then set it to target object.
// Lesson Learned: such method doesnt exactly exist. use a counter variable!!! It has saved us many times!
