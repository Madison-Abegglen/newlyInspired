import TodoService from "./todo-service.js";

var todoService = new TodoService

let ogTemplate = ''

// Use this getTodos function as your callback for all other edits

let todoModalTemplate = `
  <div class="row txt todo-p2">
    <div class="col-8 txt todo-c1">
      <h4 class="txt m-title">to-do's:</h4>
    </div>
    <div class="col-4 txt todo-c2">
      <button class="btn t-btn" onclick="app.controllers.todoController.closeTodoForm()"><i class="material-icons m-icon">close</i></button>
    </div>
    <div class="col-12 txt" id="todoList">
      <p>to-do's go here</p>
    </div>
    <div class="col-12 txt" id="m-input">
      <p>form and input goes here</p>
    </div>
  </div>
`

function getTodos() {
  //FYI DONT EDIT ME :)
  todoService.getTodos(draw)
}

/* <h4 class="txt todo-m-title">to-do's:</h4><button class="btn t-btn float-right"><i class="material-icons todo-m-icon">close</i></button><form></form> */

function draw(todos) {
  //WHAT IS MY PURPOSE?
  //BUILD YOUR TODO TEMPLATE HERE
  if (todos.data.length == 0 || null) {
    let noTodosTemplate = `<p class="txt">no to-do's currently in your to-do list</p>`
    document.getElementById('todoList').innerHTML = noTodosTemplate;
  }
  // var template = ''
  console.log("These are the to-do's:", todos);
  //DONT FORGET TO LOOP
}

export default class TodoController {
  constructor() {
    getTodos();
    // IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
  }

  showTodoForm() {
    ogTemplate = document.getElementById('todo').innerHTML
    document.getElementById('todo').style.backgroundColor = "rgb(141, 141, 141, .6)";
    document.getElementById('todo').style.height = "22vh";
    document.getElementById('todo').style.maxWidth = "20vw";
    document.getElementById('todo').style.marginTop = "1.8rem";
    document.getElementById('todo').style.marginLeft = "1.8rem";
    // document.getElementById('todo').style.alignItems = "flex-start";
    // document.getElementById('todo').style.justifyContent = "flex-start";
    document.getElementById('todo').innerHTML = todoModalTemplate;
  }

  closeTodoForm() {
    document.getElementById('todo').style.marginTop = "auto";
    document.getElementById('todo').style.marginLeft = "auto";
    document.getElementById('todo').style.backgroundColor = "transparent";
    document.getElementById('todo').innerHTML = ogTemplate.toString();
  }

  // You will need four methods
  // getTodos should request your api/todos and give an array of todos to your callback fn
  // addTodo takes in a todo and posts it to the server
  // toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
  // removeTodo takes in a todoId and sends a delete request to the server
  // **** HINT: Everytime you make a change to any todo don't forget to get the todo list again


  addTodoFromForm(e) {
    e.preventDefault() // <-- hey this time its a freebie don't forget this
    // TAKE THE INFORMATION FORM THE FORM
    var form = e.target
    var todo = {
      // DONT FORGET TO BUILD YOUR TODO OBJECT
    }

    //PASSES THE NEW TODO TO YOUR SERVICE
    //DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
    //YOU SHOULDN'T NEED TO CHANGE THIS
    todoService.addTodo(todo, getTodos)
    //^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
  }

  toggleTodoStatus(todoId) {
    // asks the service to edit the todo status
    todoService.toggleTodoStatus(todoId, getTodos)
    // YEP THATS IT FOR ME
  }

  removeTodo(todoId) {
    // ask the service to run the remove todo with this id

    // ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
  }



}
