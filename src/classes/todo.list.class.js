

export class TodoList {

    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();

    }
    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }
    eliminarTodo(id) {
        // ! https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        this.todos = this.todos.filter(todo => todo.id != id)
        this.guardarLocalStorage();

    }

    marcarCompletado(id) {

        for (const todo of this.todos) {
            // console.log(id, todo.id);

            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {

      this.todos = this.todos.filter(todo => !todo.completado )
      this.guardarLocalStorage();

    }

    guardarLocalStorage(){
        // ? JSON.stringify, transforma al this.todos (que es un objeto) a un JSON "perfecto"
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }
    cargarLocalStorage(){
        
        this.todos = (localStorage.getItem('todo')) 
                        ? JSON.parse(localStorage.getItem('todo'))
                        : [];
        // if(localStorage.getItem('todo')){
             // ! JSON.parse devuelve un JSON a su tipo origen
        //     this.todos = JSON.parse(localStorage.getItem('todo'));

        //     console.log('Cargar local: ',this.todos);
        //     console.log(typeof this.todos);
        // }else{
        //     this.todos = [];
        // }

    }

}


