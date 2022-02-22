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
 }
}