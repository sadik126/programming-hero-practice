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


//sort an array 

var array = ['sadik','sakib','mushi','ash','tamim'];

array.sort();
//reverse an array
array.reverse();
console.log(array);


//concat an array
var array1 = [23,22,45,47];
var array2 = ['sadik','sad','kal'];
var array3 = [1,4,3]
//eta akta array k akta pura string banay dey..ekhane array3 pura akta string hye gse
var newjoin = array3.join("");



var c = array1.concat(array4, newjoin);

console.log(c);


//ekhane 2 holo kal ar karim holo 5
var array5 = ['sadik','sad','kal','rahim','karim','opi'];
var array4 = array5.slice(2 ,5 );
console.log(array4);



//isArray jodi variable array hoy taile true return korbe

var array23 = ['a','b','s'];

var b = Array . isArray(array23);

console.log(b);


//indexOf 
//ekhane arrayname ar position string bole dite hbe
var array = ['a','s','g','s'];

var result = array.indexOf('s',2);

console.log(result);


//lastindexof
//ekhane last index of bolte last theke suru hbe

var array = ['a','s','g','s'];

var result = array.lastIndexOf('s');

console.log(result);



//includes method: ekhane valyue dile jodi array er moddhe thake taile true return korbe
 var array = ['sakib','tamim','mushfiq']

 var result = array.includes('sakib');

 console.log(result);

 
