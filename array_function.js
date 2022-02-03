function totalnumber(array){
var sum = 0;
for (let index = 0; index < array.length; index++) {
    let element = array[index];
   var sum = sum + element;
   
    
}
return sum;

}

var array = [23,35,45,75,84];
var total = totalnumber(array);
console.log('sum is ', total);