// let response = fetch('https://jsonplaceholder.typicode.com/users')
// console.log(response);

const myRequest = new Request('https://jsonplaceholder.typicode.com/users', {
  method: 'GET'
});

fetch(myRequest)
  .then(response => {
    // console.log(response.json())
    return response.json()
  })
  .then(e => {
    console.log(e);
  })
  .catch(console.error);

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {})
