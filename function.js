function addtwonumbers(num1 , num2 ){
sum = num1+num2;
return sum;
}

 var result = addtwonumbers(2,3);
 console.log('the result is ', result);



//  display custom message 

function custommsg(name){
 return ('hello '+name);
}

var msg = custommsg('sadik');
console.log('she said ', msg);


//pizza delivery 

function pizza(name,quantity){

    var foodname = name.toLowerCase();
if(foodname == 'pizza' && quantity < 10){
    var total = 10 * quantity;
    return('hey '+ name + 'here is your '+ quantity+'pizza. your total price is '+total)
}
else {
    return('we only sells pizza.sorry');
}
 
}

var msg = pizza('PIZZA',12);
console.log(msg);


//1+2+3+6+4

function series(numbers){
    let sum = 0;
    for (let index = 0; index <=4; index++) {
       
        
        sum = sum+ numbers[index];
        console.log(sum);
        
        

        
    }
   
    return sum;
    
}

var numbers = [1,25,36,52,24];
var result = series(numbers);


// fibonacci

function fav(number){
   
   if(typeof number !='number')
   {
       return'enter the number'
   }
   else if( number < 2){
    return'enter more number'
   }

   else{

    let array = [0,1]
    for (let index = 2; index <=number; index++) {
        
        array[index]= array[index-1]+array[index-2];
        
    }
    return array;
   }


  
   
   


}

var number = 0;
var result = fav(number);
console.log(result);



//find smallest number
function smallestelemnet(number){
var output = number[0];
for (let index = 0; index <= 4; index++) {
var element = number[index];

if(element < output){
   var output = element;
}


}
return output;


}

var number = [23,21,25,24,45];
var array = smallestelemnet(number);
console.log("answer is",array);


//find largest number
//find the largest number
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

