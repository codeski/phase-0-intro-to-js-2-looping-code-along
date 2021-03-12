// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"]

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//       console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
  
//     return gifts;
// }
  
// wrapGifts(gifts); 

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }


function writeCards(names, type) {
    for (let i = 0; i < names.length; i++) {
        names[i] = `Thank you, ${names[i]}, for the wonderful ${type} gift!`
    } 
    return names;
}

writeCards(names, type);

function countDown(n) {
    let i = n;
    while (i >= 0) {
        console.log(i);
        i--; 
    }    
}