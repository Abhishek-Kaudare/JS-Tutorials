// OOP in Js

const brad1 = {
  name: 'Brad',
  age: 30
}

// To add more functionality
function Person() {
  // name =  'Brad'; // --this doesn't add property to object
  this.name = 'Brad';
}

const brad = new Person();

console.log(brad);