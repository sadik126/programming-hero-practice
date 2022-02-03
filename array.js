var array = [10, 20, 30, 40, 50];
var sum1 = 0;

for (let index = 0; index <= 4; index++) {
  sum1 = sum1 + array[index];
  console.log(sum1);

  //ekhane shob shongkar sathe shob songkha jog hbe
}

console.log(sum1);

// ekhane total array jog hbe


var array = [1,25,35,45,56];

//change array

array[2] = 65;
 //delete a array
// delete array[1];

let sum = 0;

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  sum = sum+ element;
  
}

console.log('sum is ',sum);


// multi-dimentional array 

var multiarray = 
[
  [1,'sadik',45,'player'],
  [2,'sadik',46,'student'],
  [3,'sadik',48,'player2']

]




for (let index = 0; index < 3; index++) {
  for (let index1 = 0; index1 < 3; index1++) {
    const element1 = multiarray[index][index1];
    console.log(element1);
    
  }
  
 
  
}

// console.log(multiarray);



