/* exported postpone */

function postpone(queue) {
  const delayedValue = queue.dequeue();
  if (delayedValue === undefined) {
    return undefined;
  }
  queue.enqueue(delayedValue);
}
