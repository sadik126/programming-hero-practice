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
if(name == 'pizza'){
    var total = 10 * quantity;
    return('hey '+ name + 'here is your '+ quantity+'pizza. your total price is '+total)
}
else {
    return('we only sells pizza.sorry');
}
 
}

var msg = pizza('pizza',3);
console.log(msg);