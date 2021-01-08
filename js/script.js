const addTaskBtn = document.getElementById('add__task-btn'),
  setTaskBtn = document.getElementById('set__task-btn'),
  cancelTaskBtn = document.getElementById('cancel__task-btn'),
  taskList = document.querySelector('.task-llst'),
  setTask = document.querySelector('.set__task-btn');
  

let taskListItem;
let addTaskInput;
// let addTaskInput = document.querySelector('.task-list-add');
// console.log(addTaskBtn);

addTaskBtn.addEventListener('click', function() {
  addTaskBtn.hidden = true;
  addTaskStart();
});

function addTaskStart() {
  taskListItem = document.createElement('li');
  taskListItem.insertAdjacentHTML('beforeend', '<input class="task-list-add" type="text" value="">');
  taskList.append(taskListItem);  
  addTaskInput = document.querySelector('.task-list-add');

  addTaskInput.onblur = () =>{
    addTaskBtn.hidden = '';
    taskListItem.classList.add('task-list__item');
    addTaskEnd();
  };

  addTaskInput.focus();
  
}

function addTaskEnd() {
  taskListItem.innerHTML =
    `<input name="task" id="task__1" type="checkbox"value="1">
    <label class="label" for="task__1">${addTaskInput.value}</label>`;
  // document.querySelector('.task-list-add').remove();
}
