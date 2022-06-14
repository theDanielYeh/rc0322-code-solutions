/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const firstPop = stack.pop();
  if (firstPop === undefined) {
    return undefined;
  }
  stack.push(value);
  return stack.push(firstPop);
}
