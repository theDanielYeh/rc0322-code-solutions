let count = 3;

const ID = setInterval(() => {
  if (count > 0) {
    console.log(count);
    count--;
  } else if (count === 0) {
    console.log('Blast off!');
    clearInterval(ID);
  }

}, 1000
);
