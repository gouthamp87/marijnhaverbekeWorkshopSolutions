/*
Getters
This is the way the solution to the previous exercise might look.

The way the verb property is set per instance rather than per class is kind of awkward. Refactor the code to use a getter (get verb() { ... }) instead of an instance property.
*/

/* Given Code
class Speaker {
  constructor(name, verb) {
    this.name = name
    this.verb = verb || "says"
  }
  speak(text) {
    console.log(this.name + " " + this.verb + " '" + text + "'")
  }
}

class Shouter extends Speaker {
  constructor(name) {
    super(name, "shouts")
  }
  speak(text) {
    super.speak(text.toUpperCase())
  }
}

new Shouter("Dr. Loudmouth").speak("hello there")
*/

/* Solution Code */

class Speaker {
  constructor(name, verb) {
    this.name = name
    this._verb = verb || "says" // Make the solution this way, point to a private kind of variable.
  }
  speak(text) {
    console.log(this.name + " " + this.verb + " '" + text + "'")
  }
  get verb(){
    return this._verb;  // return the private type when accessing.
  }
}

class Shouter extends Speaker {
  constructor(name) {
    super(name, "shouts")
  }
  speak(text) {
    super.speak(text.toUpperCase())
  }
}

new Shouter("Dr. Loudmouth").speak("hello there")

