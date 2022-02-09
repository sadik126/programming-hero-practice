function addtext(){
    let text = document.getElementById('click-method');
    text.innerHTML = 'here is my event';
}

let addevent = document.getElementById('add-event')
addevent.addEventListener('click',function(){
    let text = document.getElementById('click-method');
    text.innerText = 'here is added event';
})

document.getElementById('addcmnt').addEventListener('click',function(){
    let text = document.getElementById('box');
    

    let texttop = document.getElementById('click-method');
    texttop.innerText = text.value ;
    text.value = '';
})