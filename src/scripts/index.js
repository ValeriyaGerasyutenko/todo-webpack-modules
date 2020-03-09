import '../styles/index.scss';
import {ToDoClass} from './second.js';


window.addEventListener("load", () => {
  let toDo = new ToDoClass();

  let button = document.querySelector('.btn');
  button.addEventListener('mousedown', toDo.addTaskClick());

});

