let val;

// Number to string
val = String(555);
// Output
console.log('->Number to string');
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(4 + 4);
// Output
console.log('->Number to string');
console.log(val);
console.log(typeof val);
console.log(val.length);

// Bool to string
val = String(true);
// Output
console.log('->Bool to string');
console.log(val);
console.log(typeof val);
console.log(val.length);

// Date to string
val = String(new Date());
// Output
console.log('->Date to string');
console.log(val);
console.log(typeof val);
console.log(val.length);

// Array to string
val = String([1,2,3,4]);
// Output
console.log('->Array to string')
console.log(val);
console.log(typeof val);
console.log(val.length);


// toString()
val = (5).toString();
// Output
console.log('->testing toString()');
console.log(val);
console.log(typeof val);
console.log(val.length);

val = (true).toString();
// Output
console.log('->testing toString()');
console.log(val);
console.log(typeof val);
console.log(val.length);


// String to number
val = Number('5');
// Output
console.log('->NumberAsString to number');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = Number(true);
// Output
console.log('->Bool to number');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = Number(false);
// Output
console.log('->Bool to number');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = Number(null);
// Output
console.log('->Null to number');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = Number('hello');
// Output
console.log('->String to number');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = Number([1,2,3]);
// Output
console.log('->Array to number');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = parseInt('100.30');
// Output
console.log('->testing parsInt()');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = parseFloat('100.30');
// Output
console.log('->testing parseFloat()');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

// Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);
// here the JS converts ont to string and concatenates the strings

console.log('->testing Operation String plus Number');
console.log(sum);
console.log(typeof sum);
