let array = [0,1];
for (let index = 2; index <=7; index++) {
    
    array[index] =array[index-1]+array[index-2];
    

}

console.log(array);