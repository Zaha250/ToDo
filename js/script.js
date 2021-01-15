const headerMenu = document.querySelector('.header-menu ul'),
      addTaskBtn = document.getElementById('add__task-btn'),
      readyTaskBtn = document.getElementById('ready__task-btn'),
      cancelTaskBtn = document.getElementById('cancel__task-btn'),
      taskList = document.querySelector('.task-llst');
  

let taskListItem;
let addTaskInput;
//создал переменную для динамической подстановки индекса для label
let i = 0;

headerMenu.addEventListener('click', function(e) {
  switch (e.target.id) {
    case 'add__task-btn':
      addTaskBtn.style.display = 'none';
      readyTaskBtn.style.display = 'block';
      cancelTaskBtn.style.display = 'block';
      addTaskStart();
      break;
  
    case 'cancel__task-btn':
      readyTaskBtn.style.display = 'none';
      cancelTaskBtn.style.display = 'none';
      break;

    case 'ready__task-btn':
      addTaskEnd();
      break; 
      
  }
});

function addTaskStart() {
  taskListItem = document.createElement('li');
  taskListItem.insertAdjacentHTML('beforeend', '<input class="task-list-add" type="text" value="">');
  taskList.append(taskListItem);  
  addTaskInput = document.querySelector('.task-list-add');

  addTaskInput.focus();
  i++;

  addTaskInput.onkeydown = (e) => {
    if(e.key === 'Enter') {
      addTaskEnd();
    }
  };

  addTaskInput.onblur = () => {
    addTaskEnd();
  };

}

function addTaskEnd() {
  addTaskBtn.style.display = 'block';
  readyTaskBtn.style.display = 'none';
  cancelTaskBtn.style.display = 'none';
  //если пользователь ничего не ввел, то выходим
  if (addTaskInput.value.length < 1) {
    addTaskInput.parentElement.remove();
    return;
  }  
  taskListItem.classList.add('task-list__item');
  taskListItem.innerHTML =
    `<input name="task__${i}" id="task__${i}" type="checkbox"value="${i}">
    <label class="task-list__label" for="task__${i}">${addTaskInput.value}</label>`;
}

//отслеживаем изменения в списке задач
taskList.addEventListener('change', function(e) {
  let inputsCheck = [...document.querySelectorAll('[type="checkbox"]:checked')];
  let editTaskBtn = document.getElementById('edit__task-btn');
  let delTaskBtn = document.getElementById('del__task-btn');

  if (inputsCheck.length == 1) {
    editTaskBtn.style.display = 'block';
    delTaskBtn.style.display = 'block';
  } else if (inputsCheck.length > 1){
    editTaskBtn.style.display = 'none';
    delTaskBtn.style.display = 'block';
  } else {
    editTaskBtn.style.display = 'none';
    delTaskBtn.style.display = 'none';
  }

  //Удаляем отмеченные задачи
  delTaskBtn.onclick = () => {
    inputsCheck.forEach(input => {
      delTask(input);
    });
    //Если пользователь удалил все задачи, то скрываем кнопки "Изменить" и "Удалить"
    // if ([...document.querySelectorAll('.task-list__item')].length < 1) {
    //   editTaskBtn.style.display = 'none';
    //   delTaskBtn.style.display = 'none';
    // }
  }

  editTaskBtn.onclick = () => {
    inputsCheck.forEach(input => {
      editTaskStart(input, document.querySelector('.task-list__label'));
    });
    
  }

  function delTask(inputCheck) {
    inputCheck.parentElement.remove();
    editTaskBtn.style.display = 'none';
    delTaskBtn.style.display = 'none';
  }

});



function editTaskStart(inputCheck) {
  let label = inputCheck.nextElementSibling;
  // console.log(label);
  label.replaceWith(addTaskInput);
  addTaskInput.innerHTML = label.innerHTML;
  addTaskInput.focus();
}
