//get submit button
document.getElementById('submit').addEventListener('click',function(){
//get input text from
    let comment = document.getElementById('new-comment');

const usercomment = comment.value;
//create comment paragraph
let p = document.createElement('p');
p.innerText = usercomment;
});