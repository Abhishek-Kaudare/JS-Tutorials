// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe'/* Declaring Default in Es6*/){ 
  // if(typeof firstName === 'undefined'){firstName = 'John'} // In ES5 Defining  Default
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  //console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// FUNCTION EXPRESIONS

const square = function(x = 3){
  return x*x;
};

// console.log(square( ));

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function(){
  console.log('IIFE Ran..');
})();

(function(name){
  console.log('Hello '+ name);
})('Brad');

// PROPERTY METHODS

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}
console.log(todo);
todo.add();
todo.edit(22);
todo.delete();
