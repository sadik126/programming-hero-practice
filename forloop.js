// fibonacci
 const numbers = [0,1]

 for (let index = 2; index <=10; index++) {
    
     numbers[index] = numbers[index-1] + numbers[index-2];
 }

 console.log(numbers);