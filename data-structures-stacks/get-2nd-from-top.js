/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const firstPop = stack.pop();
  if (firstPop === undefined) {
    return undefined;
  }
  const secondValue = stack.peek();
  stack.push(firstPop);
  return secondValue;
}
