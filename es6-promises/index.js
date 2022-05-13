const takeAChance = require('./take-a-chance');

const $returnedPromise = takeAChance('Daniel');

$returnedPromise.then(value => {
  console.log(value); // Success!
});

$returnedPromise.catch(Error => console.log(Error.message));
