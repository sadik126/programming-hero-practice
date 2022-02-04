function totalnumber(array){
var sum = array[0];
for (let index = 0; index < array.length; index++) {
    //array te ja ja  element ase oigula show hbe
    
    let element = array[index];
   var sum = sum + element;
     console.log(element);
   
    
}
return sum;

}

// var array = [23,35,45,75,84];
let array = new Array(1,25,56,45,48);
//add array element
array[5] = 110;
var total = totalnumber(array);
console.log('sum is ', total);