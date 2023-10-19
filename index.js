const userInputString = prompt("Pick A Froyo Flavors",
 "vanilla, strawberry, coffee" );

 const stringArray = userInputString.split(",");
//  const flavorCounts = {"vanilla" "strawberry" "coffee"};
const froyoFlavors = {
  // vanilla: 3,
  // strawberry: 1,
  // coffee: 2, 
}


// for( const key in froyoFlavors){
// }



for (let i = 0; i < stringArray.length; i++) {
  if (froyoFlavors[stringArray[i]]) {
    froyoFlavors[stringArray[i]]++;
  } else {
    froyoFlavors[stringArray[i]] = 1;
  }
}

console.table(froyoFlavors)