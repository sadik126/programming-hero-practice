// ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। 

const output = () => {
    console.log('here is humanity');
    
    let coming = document.getElementById('coming');
    
    coming.innerText = `here is humanity`;



}


// ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 


const second = () => {
    // console.log("are you sure");
  const value =  prompt('how are you');
  
  if(value){
    // console.log( parseInt(value) + 200);
    alert( parseInt(value) + 200);
  }
}





setTimeout(output , 3500);