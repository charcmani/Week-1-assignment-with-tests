/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
    this.todoList = [];
  }

  add(task){
    this.todoList.push(task);
  }

  remove(indexOfTask){
    this.todoList.splice(indexOfTask,1);
  }
  update(indexOfTask,updatedTask){
    if (indexOfTask < this.todoList.length){
      this.todoList[indexOfTask] = updatedTask;
    }
  }
  getAll(){
    return this.todoList;
  }
  get(indexOfTask){
    if (indexOfTask < this.todoList.length){
    return this.todoList[indexOfTask];
    }
    return null;
  }
  clear(){
    this.todoList=[];
  }
}

module.exports = Todo;
