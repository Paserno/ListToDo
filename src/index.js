import './styles.css';

import {Todo, TodoList} from './classes';

const todoList = new TodoList();

const tarea = new Todo('Aprender JavaScript');
const tarea1 = new Todo('Aprender Node.js');


todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea1);


console.log(todoList);