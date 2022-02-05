function number(){
 let num = Math.random(1-6)*6
 let final = Math.round(num);
 return final;
}

let result = number(1,6);
console.log(result);