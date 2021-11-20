# Lista de Tareas 📝
> Una aplicacion que utiliza `LocalStorage`, para almacenar temporal mente los registros 
El LocalStorage y SessionStorage son exlucusivos de los navegadores.

### 1. El ejemplo a mostrar es en la **clase TodoList**, del metodo `guardarLocalStorage()`.
- El LocalStorage del ejemplo necesita que le envien 2 parametros de tipo Stringe.
- Como `this.todos` era un objeto, era necesario transformarlo a un tipo **JSON**, para poder hacer manejo de sus propiedades.
````
localStorage.setItem('todo', JSON.stringify(this.todos));
````

### 2. El segundo ejemplo muestra la misma clase anterior, pero con el metodo de `cargarLocalStorage()`.
- El tipo `JSON.parse` devuelve un JSON a su tipo origen.
````
JSON.parse(localStorage.getItem('todo'))
````
- Para luego buscarlo en el `.map()`, esto lo que hace es crear un arreglo nuevo con los elementos de la condicion.
````
this.todos = this.todos.map(obj => Todo.fromJson(obj))
````
- Mencionar que `Todo.fromJson` es un elemento **static** en la **clase Todo**, ya que se necesitan los elementos del `LocalStorage`, para ser manipulados y esto se consigue a traves de un **metodo static** que **desestructura** los elementos que le son entregados.
````
static fromJson({id, tarea, completado, creado}){

        const tempTodo = new Todo(tarea);

        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;
        
        return tempTodo;
    }
````

#
#
## Cascaron de Webpack 🐣

Este es el proyecto inicial para crear aplicaciones con webpack.

### Notas:
 Es necesario reconstruir el Proyecto con los diferentes elementos: 
- Para la reconstruir los modulos de node
````
npm i
````

- Para la construccion del build de desarrollador ⚒️
````
npm run build:dev
````
- Construccion del build de produccion (en el caso de un lanzamiento a produccion) 💻
````
npm run build
````

>  Tabla de diferencias
</br>


| Nombre      | Descripcion |Para|
| ----------- | ----------- | ----------- |
| **build:dev**| Minimizado y facil de leer para el navegador|Desarrollador
| **build**| Facil de leer para el desarrollador|Producción