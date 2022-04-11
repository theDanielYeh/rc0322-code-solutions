/* exported capitalizeWords */
function capitalizeWords(string) {
  var lowerCase = string.toLowerCase();
  var $split = lowerCase.split(' ');
  for (var i = 0; i < $split.length; i++) {
    $split[i] = $split[i][0].toUpperCase() + $split[i].substring(1);
  }

  return $split.join(' ');
}
// lowercase everything then split with split(' ').. capitalize first letter.. loop all together?
