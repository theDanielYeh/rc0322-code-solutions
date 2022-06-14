/* exported countValues */

function countValues(stack) {
  let i = 0;
  while (stack.pop() !== undefined) {
    i++;
  };
  console.log(i);
  return i;
}
