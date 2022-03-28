console.log('test', 'hello, world');

var h1 = document.querySelector('h1');
console.log('$h1', h1);

console.dir(h1);

var explanation = document.querySelector('#explanation');
console.log('$explanation', explanation);

console.dir(explanation);

var hint = document.querySelector('p.hint');
console.log('$hint', hint);

console.dir(hint);

var nodeList = document.querySelectorAll('p');
console.log('$nodeList', nodeList);

var nodeListTwo = document.querySelectorAll('.example-link');
console.log('$nodeListTwo', nodeListTwo);
