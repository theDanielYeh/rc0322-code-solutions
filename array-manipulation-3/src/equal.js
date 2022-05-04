/* exported equal */
function equal(first, second) {
  if (first.length === second.length && first.length > 0) {
    var $results = 0;
    for (var i = 0; i < first.length; i++) {
      if (first[i] === second[i]) {
        $results += 0;
      } else if (first[i] !== second[i]) {
        $results += 1;
      }
    }
    if ($results === 0) {
      return true;
    } else {
      return false;
    }
  } else if (first.length === 0 && second.length === 0) {
    return true;
  } else if (first.length !== second.length) {
    return false;
  }
}

// for loop that iterates through each array objects and determines if all are matching
// upon finding first mismatch, break.
