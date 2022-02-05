function student(){
let name = array.sort();
return name;
}

var array = ['sadik','abul','kamal','pushpa','rahim','karim']
var result = student(array);
console.log(result);





function result2(){
 let final = number.sort(function(a,b){
  return a - b;
 });
 return final;
}
var number = [3,5,8,14,1,4];
var number1 = result2(number);
console.log(number1);