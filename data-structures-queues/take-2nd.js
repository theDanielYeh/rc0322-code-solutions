/* exported take2nd */

function take2nd(queue) {
  const firstValue = queue.dequeue();
  if (firstValue === undefined) {
    return undefined;
  }
  queue.enqueue(firstValue);
  return queue.dequeue();
}
