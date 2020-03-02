
export class ToDoClass {
  constructor() {
    this.tasks = [{
      task: 'work out',
      isComplete: false
    }, {
      task: 'clean the flat',
      isComplete: true
    }, {
      task: 'Download a film',
      isComplete: false
    }, ];
    this.loadTasks();
    this.addEventListener();
  }
  addTask(task) {
    let newTask = {
      task,
      isComplete: false,
    };
    let parentDiv = document.getElementById('addTask').parentElement;
    if (task === '') {
      return;
    } else {
      this.tasks.push(newTask);
      this.loadTasks();
    }
  }
  addTaskClick() {
    let target = document.getElementById('addTask');
    this.addTask(target.value);
    target.value = "";
  }
  deleteTask(event, taskIndex) {
    event.preventDefault();
    this.tasks.splice(taskIndex, 1);
    this.loadTasks();
  }
  addEventListener() {
      document.getElementById('addTask').addEventListener('keypress', event => {
        if (event.keyCode === 13) {
          this.addTask(event.target.value);
          event.target.value = "";
        }
      });
    }
    
  toggleTaskStatus(index) {
    this.tasks[index].isComplete = !this.tasks[index].isComplete;
    this.loadTasks();
  }
 
  generateTaskHtml(task, index) {
    return `
            <li class="app__list-item checkbox">                      
                <label><input id="toggleTaskStatus" type="checkbox" onchange="toDo.toggleTaskStatus(${index})" value="" class="" ${task.isComplete ? 'checked' : ''}></label>              
                <div class=" task-text ${task.isComplete ? 'complete' : ''}">
                ${task.task}
                </div>           
                <a class="" href="" onClick="toDo.deleteTask(event, ${index})"><span id="deleteTask" data-id="${index}" class="delete-icon">&#215;</span></a>             
            </li>
        `;
  }
  loadTasks() {
    let tasksHtml = this.tasks.reduce((html, task, index) => html += this.generateTaskHtml(task, index), '');
    document.getElementById('taskList').innerHTML = tasksHtml;
  }
}

