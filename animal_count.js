function animalcount(miles){
let first10permile = 10;
 if(miles<=10){
     const count = miles*10;
     return count;
 }

 if(miles<=20){
     const first10 = 10 * first10permile;
     const restmiles = miles - 10;
     const after10 = restmiles * 50;
     let under20mile = first10 + after10;
     return under20mile;
 }

 if(miles>20){
    const first10 = 10 * first10permile;
 }
}

let animals = animalcount(13);
console.log(animals);