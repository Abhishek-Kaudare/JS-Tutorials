// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// EVENT DELGATION

// const delItem = document.querySelector('.delete-item'); // Method 1

// delItem.addEventListener('click', deleteItem); // Method 1

document.body.addEventListener('click', deleteItem); // Method 2

function deleteItem(e){
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }

  // Method 2
  if(e.target.parentElement.classList.contains('delete-item')){ 
    // we use this method as above method only applies to first item
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
    e.preventDefault();
  }
}