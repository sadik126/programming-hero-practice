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