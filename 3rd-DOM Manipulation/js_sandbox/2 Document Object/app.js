let val;

val = document;
val = document.all;
val = document.all[2]; 
val = document.all.length;// Counts all elements in DOM
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain; 
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms; 
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;// Gives a string
val = document.links[0].classList[0];// Gives a Collection - DOM Collection List

val = document.images;

val = document.scripts;
val = document.scripts[1].getAttribute('src'); 

let scripts = document.scripts; console.log(scripts);

let scriptsArr = Array.from(scripts); //Converting HTML collection to array as foreach is an array specific method

scriptsArr.forEach(function(script) {
    console.log(script.getAttribute('src'));
});
console.log(val);