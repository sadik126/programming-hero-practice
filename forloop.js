// fibonacci
 const numbers = [0,1]

 for (let index = 2; index <=10; index++) {
    
     numbers[index] = numbers[index-1] + numbers[index-2];
 }

 console.log(numbers);


//delete multiple numbers

 function deletemultiplenumbers(persons){
  
     var unique = [];
    // for (let index = 0; index < persons.length; index++) {
    //     const element = persons[index];
    //     console.log(element);
        
    // }

    for (const element of persons) {
        // console.log(element);
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }

    return unique;


 }


 var persons = ['sadik','rahim','karim','puspa2','rocky','puspa2'];
 var result = deletemultiplenumbers(persons);
 console.log(result);