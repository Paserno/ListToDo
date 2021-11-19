import './styles.css';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

const tarea = new Todo('Aprender JavaScript');
todoList.nuevoTodo(tarea);

// const tarea1 = new Todo('Aprender Node.js');
//  todoList.nuevoTodo(tarea1);

console.log(todoList);

crearTodoHtml(tarea);
// crearTodoHtml(tarea1);
