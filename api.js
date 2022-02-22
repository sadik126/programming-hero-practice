


  function run(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }


  function loadusers(){
   fetch('https://jsonplaceholder.typicode.com/users')
  }