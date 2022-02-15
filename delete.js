document.getElementById('dltbtn').addEventListener('click',function(){
   document.getElementById('delete').style.display = 'none';
})


document.getElementById('delete-confirm').addEventListener('focus',function(){
    document.getElementById('delete-confirm').style.borderBlockColor='black';
 })

 document.getElementById('delete-confirm').addEventListener('blur',function(){
    document.getElementById('delete-confirm').style.borderBlockColor='red';
 })