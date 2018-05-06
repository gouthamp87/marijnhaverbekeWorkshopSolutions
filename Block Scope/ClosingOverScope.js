/*
Block scope.1:
Closing over scope
This is a typical mistake to make in JavaScript. We create a number of functions in a loop, and refer to an outside variable from these functions. All of them will end up referring to the same variable, which ends up being incremented to 10. Thus, callbacks[2] does not log 2. It logs 10, as do all functions in the array.

Do you know the solution for such situations in ES5? Does ES6 provide a cleaner solution?
*/

/* Given Code
var callbacks = []
for (var i = 0; i < 10; i++) {
  callbacks.push(function() { console.log(i) })
}

callbacks[2]()
*/

// Solution

var callbacks = []
for (let i = 0; i < 10; i++) {
  callbacks.push(function() { console.log(i) })
}

callbacks[2]()