function loadpost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displaypost(data))
}
loadpost();
function displaypost(data){
 console.log(data)

 for (const post of data) {
     console.log(post.title)
     const section = document.getElementById('container');
     const div = document.createElement('div');
     div.classList.add('post');
    
     div.innerHTML = 
     `
     <h3>${post.title}</h3>
     <p>${post.body}</p>
     
     `

     section.appendChild(div);
 }
}