import '../styles/index.scss';
import {ToDoClass} from './second.js';


let toDo;

window.addEventListener("load", () => {
  toDo = new ToDoClass();
});