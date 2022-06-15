/* exported removeNext */

function removeNext(list) {
  if (list.next === null) return;
  const remainingNodes = list.next.next;
  list.next = remainingNodes;
}
