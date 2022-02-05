function animalcount(miles){
let first10permile = 10;
let second10permile = 50;
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
    const second10 = 10 * second10permile;
    const restmiles = miles - 20;
    let after10 = restmiles * 100;
    let result = first10 + second10 + after10;
    return result;
 }
}

let animals = animalcount(103);
console.log(animals);