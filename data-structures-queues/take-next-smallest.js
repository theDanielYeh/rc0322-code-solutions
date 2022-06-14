/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let firstValue = queue.dequeue();
  if (firstValue === undefined) {
    return undefined;
  }
  let secondValue = queue.peek();
  if (secondValue === undefined) {
    return firstValue;
  }
  while (firstValue >= secondValue) {
    queue.enqueue(firstValue);
    firstValue = queue.dequeue();
    secondValue = queue.peek();
  }
  return firstValue;
}
