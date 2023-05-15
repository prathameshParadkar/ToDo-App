document.body.style.backgroundColor = "#E6D9FB"
let todoInput = document.querySelector(".form-control");
let todoOutput = document.querySelector("#todo");
let main = document.querySelector("main");
let selectTodo = document.querySelector(".dropdown");

todoInput.addEventListener("keypress", (e) => {
    if(e.keyCode === 13  && todoInput.value){
        todoInputOnClick();
        //added to local storage
    }
});
function todoInputOnClick(){
    let newTodo = document.createElement("div");
    newTodo.classList.add("todocontainer");
    newTodo.classList.add(`delete`);
    newTodo.innerHTML = `
        <div class="input-group">
            <span type="text" class="form-control" id="todo">${todoInput.value}</span>
            <button class="btn btn-outline-secondary " id="todoBtn" type="button"><img src="donebutton.png" alt="delete"></button>
            <button class="btn btn-outline-secondary "  id="todoBtn" type="button" ><img src="deletebutton.png" alt="delete"></button>
        </div>
    `
    
    main.append(newTodo);
    todoInput.value = "";

    let deleteTodoButton = newTodo.children[0].children[2];

    deleteTodoButton.addEventListener("click", () => {
        deleteTodoButton.parentElement.parentElement.remove();
    });

    let doneTodoButton = newTodo.children[0].children[1];
    
    doneTodoButton.addEventListener("click", ()=>{
        doneTodoButton.parentNode.parentNode.classList.add("doneTodo");
        doneTodoButton.disabled = true;
        
    })
}

let todoArray = main.children;
selectTodo.addEventListener("change", ()=>{
    
    for(todo of todoArray){
        todo.style.display = "block";
    }

    if(selectTodo.value == "2"){
        for (todo of todoArray){
            if(!(todo.classList.contains("doneTodo"))){
                todo.style.display = "none";
            }
        }
    }
    else if(selectTodo.value == "3"){
        for (todo of todoArray){
            if(todo.classList.contains("doneTodo")){
                todo.style.display = "none";
            }
        }
    }
    
});
