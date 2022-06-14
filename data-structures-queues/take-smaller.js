/* exported takeSmaller */

function takeSmaller(queue) {
  const firstValue = queue.dequeue();
  if (firstValue === undefined) {
    return undefined;
  }
  const secondValue = queue.dequeue();
  if (secondValue === undefined) {
    return firstValue;
  }
  if (firstValue <= secondValue) {
    queue.enqueue(secondValue);
    return firstValue;
  }
  queue.enqueue(firstValue);
  return secondValue;
}
