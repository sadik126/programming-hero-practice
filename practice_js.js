// inch to feet 

function inchtofeet(inch){
    var feet = inch*12;
    return feet;
}

 var answer = inchtofeet(156);
 console.log(answer);


 //miles to km 
function milestokm(mile){
    var miles = mile*1.609344;
    return miles;
}

var answer = milestokm(23);
console.log(answer);



function evencheck(num){
 if(num%2==0){
    //  return true;
     console.log('this is even');
 }
 else{
     return ('this is odd') ;
    //  console.log('this is odd');
 }
}

var number = 23;
var result = evencheck(number);
console.log(result);

