/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  let i = 0;
  while (i < index) {
    queue.enqueue(queue.dequeue());
    i++;
  }
  return queue.dequeue();
}
