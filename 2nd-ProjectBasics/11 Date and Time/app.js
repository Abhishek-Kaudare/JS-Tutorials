let val;

const today = new Date();
console.log(today);
var birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('1/1/2018');

val = today.getMonth();//base 0
val = today.getDate();
val = today.getDay(); console.log(birthday.getMonth());//base 0
val = today.getFullYear(); console.log(val);
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();


birthday.setMonth(2);//base 0
birthday.setDate(12);  
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);
