/*  Problem Statement
Object literals.1:
Fake point
Use a single object literal to create an object that is indistinguishable from a Point instance, without calling the Point constructor.
*/

/* Given Code
class Point {
  constructor(x, y) {
    this.x = x, this.y = y
  }
  add(other) {
    return new Point(this.x + other.x, this.y + other.y)
  }
}

var fakePoint = YOUR_CODE_HERE
console.log(fakePoint instanceof Point)
*/
/* Solution Code */

class Point {
  constructor(x, y) {
    this.x = x, this.y = y
  }
  static add(other) {
    return new Point(this.x + other.x, this.y + other.y)
  }
}
let x,y;
var fakePoint = Point.add({x,y})
console.log(fakePoint instanceof Point)