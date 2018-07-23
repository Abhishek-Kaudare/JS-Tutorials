// var,let,const
var name = 'John Doe';
console.log(name);
name = "Steave Smith";
console.log(name);

// Init var

var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

//Var can't start with numbers
//var can just contain letters,numbers,_,$
//_name,$name,name234 allowed
//(anyOtherSymbol)name,12name not allowed

// Multi Word Vars
var firstName = "John" //Camel Case used for all variables
var FirstName = "Sara" //Pascal Case used for Constructive classes and ES6 objects


//LET
//Let is similar to var but has advantages at block level scope
let greeting1;
console.log(greeting1);
greeting1 = 'Hello';
console.log(greeting1);
greeting1 = "Hello World";
console.log(greeting1);

//const 
const name1 = 'John';
console.log(name1);
// // Can not reassign
// name = 'Sara';
// // Have to assign a value
// // const greeting;

const person = {
    name: 'John',
    age: 30
}
console.log(person);

person.name = 'Sara';
person.age = 32;
console.log(person);
// const have to be initialized
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.push(6);
console.log(numbers);
// In Objects Cannot Reassign But can change

//Not Allowed
numbers = [1,2]
console.log(numbers);
//Not Allowed
person = {
    name: "Neha"
}
console.log(person);