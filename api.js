


  function run(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }


  function loadusers(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(data => displayuser(data))
  }

  function displayuser(data){
      let ul = document.getElementById('ul'); 
      for (const user of data) {
          console.log(user.name)
        //   ul.innerHTML +=`
        //   <li>
        //    username : ${user.name}
        //   </li>`
        //   ul.appendChild(ul.innerHTML);
        let li = document.createElement('li');
        li.innerText = ` ${user.name}`;
        ul.appendChild(li);
      }
  }