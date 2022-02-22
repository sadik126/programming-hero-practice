document.getElementById('dltbtn').addEventListener('click',function(){
   document.getElementById('delete').style.display = 'none';
})


document.getElementById('delete-confirm').addEventListener('focus',function(){
    document.getElementById('delete-confirm').style.borderBlockColor='black';
 })

 document.getElementById('delete-confirm').addEventListener('blur',function(){
    document.getElementById('delete-confirm').style.borderBlockColor='red';
 })

 document.getElementById('delete-confirm').addEventListener('keyup',function(event){
  let valuebox =  document.getElementById('delete-confirm');
  console.log(valuebox.value);
  if(event.target.value == 'delete'){
    document.getElementById('dltbtn').removeAttribute('disabled');
  }
  else{
    document.getElementById('dltbtn').setAttribute('disabled',true);
  }

 })


//  document.getElementById('delete-confirm').addEventListener('change',function(e){
//     let valuebox =  document.getElementById('delete-confirm');
//     console.log(valuebox.value);
  
//    })