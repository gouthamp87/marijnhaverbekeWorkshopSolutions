/*
Object literals.3:
Singleton
Add a get method to the ids object, which returns the next id and increments its next counter. Use the short method syntax.
*/


/* Given Code
var ids = {
  next: 0
}

console.log(ids.get())
// → 0
console.log(ids.get())
// → 1

*/



// Solution

var ids = {
  next: 0,
  get(){ return this.next++;}
  
}

console.log(ids.get())
// → 0
console.log(ids.get())
// → 1