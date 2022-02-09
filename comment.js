document.getElementById('submit').addEventListener('click',function(){
let comment = document.getElementById('new-comment');

const usercomment = comment.value;

let p = document.createElement('p');
p.innerText = usercomment;
});