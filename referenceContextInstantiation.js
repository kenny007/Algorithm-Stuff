// reference type
[] === [] // false
[1] === [1] // false
var object1 = { value: 10 };
var object2 = object1; // this will point/reference to the same memory address
var object3 = { value: 10 };

object1 === object2 // true
object1 === object3 // false
// objects are reference types in JS, reference types which are non-primitive types are not defined
// by the programming languages, they are created by the programmers, arrays are objects in JS
// context vs scope, scope is created when it sees curly brackets. Context explains where we are within
// the object, this in JS is the window object
const object4 = { // this will bind to the context of the encapsulating functions
  a: function () {
    console.log(this);
  }
}

// instantiation, is when you make a copy of an object and reusable the code.
class Player { // when you create a copy of a class the constructor object is what is first run
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
  }
}

class Wizard extends Plater {
  constructor(name, type) { // anything we extend something we need to call the constructor func of the parent
    super(name, type)
  }
  play() {
    console.log(`WEEEEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
