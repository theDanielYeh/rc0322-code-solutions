/* exported getLength */

function getLength(list) {
  let i = 1;
  while (list.next) {
    list = list.next;
    i++;
  }
  return i;
}
