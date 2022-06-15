/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const appendNode = new LinkedList(value);
  while (list !== null) {
    if (list.next === null) {
      list.next = list;
      list.next = appendNode;
      return;
    }
    list = list.next;
  }
}
