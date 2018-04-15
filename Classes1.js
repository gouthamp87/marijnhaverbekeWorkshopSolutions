/*
Classes.1:
Point
Write a class called Point, which represents a point in two-dimensional space. A point has x and y properties, given as arguments to its constructor.

It also has a single method plus, which takes another point and returns the sum of the two points, that is, a new point whose x is the sum of the x properties of the two original points, and whose y is the sum of their y properties.
*/
class Point{
	constructor(a,b){
      this.x = a;
      this.y = b;
    }
	plus(point){
      this.x += point.x;
      this.y += point.y;
      return this;
    }
}
console.log(new Point(1, 2).plus(new Point(2, 1)));
// → Point{x: 3, y: 3}
