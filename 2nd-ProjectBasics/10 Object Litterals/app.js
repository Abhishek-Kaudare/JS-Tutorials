 const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2018 - this.age;
  }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.address;
val = person.hobbies[1];
val = person.address['city'];
val = person.getBirthYear();
console.log(val);
console.log(typeof (val));

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 40}
];
console.log(people[1]);
console.log(typeof (people[1]));

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}