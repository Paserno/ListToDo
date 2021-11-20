import './styles.css';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

//  const tarea = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(tarea);
// const tarea1 = new Todo('Aprender Node.js');
//  todoList.nuevoTodo(tarea1);

todoList.todos.forEach(crearTodoHtml);
//* todoList.todos.forEach( todo => crearTodoHtml(todo)); Es lo mismo
// ! ya que mientras se mande el mismo argumento y se recibe el mismo, no es necesario la "funcion flecha"

const newTodo = new Todo('Aprender Ingles');
// // todoList.nuevoTodo(newTodo);
// // todoList.todos[0].imprimirClase();
newTodo.imprimirClase();

console.log('todos', todoList.todos);
 