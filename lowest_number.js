 var array = [20,26,54,75,14];
 let largest = array[0];

  for (let index = 0; index < array.length; index++) {
      const element = array[index];

      if(element < largest){
        largest = element;
      }
      
     
      
  }

  console.log(largest);