var array = [10,20,30,40,50];
var sum1 = 0;

for (let index = 0; index <=4; index++) {
  
    sum1 = sum1 + array[index];
    console.log(sum1);

    //ekhane shob shongkar sathe shob songkha jog hbe

   
}

console.log(sum1);
//ekhane total array jog hbe



find the largest number
let largest = 0;
function largestnumber(numbers){
for (let index = 0; index < numbers.length; index++) {
    let element = numbers[index];
    
    if(element>largest)
    {
        largest = element;
    }
    
}
return largest;
}

var numbers = [21,35,65,45,85,49];
var oldest = largestnumber(numbers);
console.log(oldest);







