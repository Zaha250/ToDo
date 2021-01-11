const addTaskBtn = document.getElementById('add__task-btn'),
      setTaskBtn = document.getElementById('set__task-btn'),
      cancelTaskBtn = document.getElementById('cancel__task-btn'),
      taskList = document.querySelector('.task-llst'),
      setTask = document.querySelector('.set__task-btn');
  

let taskListItem;
let addTaskInput;
//создал переменную для динамической подстановки индекса для label
let i = 0;

addTaskBtn.addEventListener('click', function() {
  addTaskBtn.style.display = 'none';
  setTaskBtn.style.display = 'block';
  cancelTaskBtn.style.display = 'block';
  addTaskStart();
});

function addTaskStart() {
  taskListItem = document.createElement('li');
  taskListItem.insertAdjacentHTML('beforeend', '<input class="task-list-add" type="text" value="">');
  taskList.append(taskListItem);  
  addTaskInput = document.querySelector('.task-list-add');
  

  addTaskInput.onblur = () =>{
    addTaskBtn.style.display = 'block';
    if (addTaskInput.value.length < 1) {
      addTaskInput.remove();
      return;
    }
    taskListItem.classList.add('task-list__item');
    addTaskEnd();
  };


  addTaskInput.focus();
  i++;

  addTaskInput.onkeydown = (e) => {
    if(e.key == 'Enter') {
      if (addTaskInput.value.length < 1) {
        addTaskInput.remove();
        return;
      }
      addTaskEnd();
    }
  };

  setTask.oncklick = () => {
    addTaskEnd();
  };

}



function addTaskEnd() {
  taskListItem.innerHTML =
    `<input name="task__${i}" id="task__${i}" type="checkbox"value="${i}">
    <label class="task-list__label" for="task__${i}">${addTaskInput.value}</label>`;
  setTaskBtn.style.display = 'none';
  cancelTaskBtn.style.display = 'none';

}

taskList.addEventListener('change', function(e) {
  let inputCheck = [...document.querySelectorAll('[type="checkbox"]:checked')];
  let editTaskBtn = document.getElementById('edit__task-btn');
  let delTaskBtn = document.getElementById('del__task-btn');

  console.log(inputCheck.length);

  // inputCheck.forEach((input) => {
  //   let arrInputCheck = [];

  //   if(input.checked) {
  //     arrInputCheck.push(input.checked);
  //   } 
  //   console.log(arrInputCheck.length);

  //   // if (e.target.getAttribute('type') == 'checkbox') {
  //   //   if (e.target.checked) {
        
  //   //     // editTaskBtn.style.display = 'block';
  //   //     // delTaskBtn.style.display = 'block';
  //   //   } 
  //   // }

  // });
  
});
