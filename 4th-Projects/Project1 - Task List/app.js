// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
const delElement = document.querySelectorAll('.fa fa-remove');

// Load all event listners
loadEventListeners();

// Load all event listners
function loadEventListeners() {
  // DOM Load Event
  document.addEventListener('DOMContentLoaded',getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks
  filter.addEventListener('keyup',filterTasks);

}

// Get Tasks from LS
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);
  });
  
} 

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }else{
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);
    // Store in LS
    storeTaskInLocalStorage(taskInput.value);
    // Clear input
    taskInput.value = '';
  }
  e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) { 
    // as the delete element is child element of anchor consisting the task so calling 
    if(confirm('Are You Sure?')){
      e.target.parentElement.parentElement.remove();
    }
    // reamove from LS
    removeTaskFromLocalStorage(e.target.parentElement.parentElement.textContent)
  }
  e.preventDefault();
}

// remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if (taskItem === task) {
      console.log(task);
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
// Clear tasks
function clearTasks(e) {

  if (confirm('Are You Sure?')){
    while(taskList.firstChild){
      taskList.removeChild(taskList.firstChild);
    }
  }

  clearTasksFromLoacalStorage();
  e.preventDefault();  
}

// Clear tasks form LS
function clearTasksFromLoacalStorage() {
  localStorage.clear();
  
}
// Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  taskList.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    }else{
      task.style.display = 'none';
    }
  });
}
