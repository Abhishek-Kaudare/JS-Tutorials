// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');

//   //e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){ // e is the event object
  //console.log('Clicked');

  let val;

  val = e;// 

  // Event target element
  val = e.target; //target gives the targeted element
  val = e.target.id; 
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;
  console.log(val);



  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;

}