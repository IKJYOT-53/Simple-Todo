let button = document.querySelector("#button");
let ul = document.querySelector("#ul");
button.addEventListener('click',() => {
    let inputtext = document.querySelector("#inputtext");
    addTodos(inputtext.value);
    let li = document.createElement('li');
    let div = document.createElement('div');
    let span = document.createElement('span');
    let checkbx = document.createElement('input')
    
    checkbx.type='checkbox'
    checkbx.id='checkbox'
    span.innerText=inputtext.value;
    div.appendChild(checkbx);
    div.appendChild(span);
    li.appendChild(div);
    ul.appendChild(li)
    inputtext.value = ''
    checkbx.addEventListener('change',() =>{
        deleteTodo(span.innerText)
    })
})
window.onkeydown = (key) => {
    if(key.keyCode === 13) {
        let inputtext = document.querySelector("#inputtext");
        addTodos(inputtext.value);
    let li = document.createElement('li');
    let div = document.createElement('div');
    let span = document.createElement('span');
    let checkbx = document.createElement('input')
    checkbx.type='checkbox'
    checkbx.id='checkbox'
    span.innerText=inputtext.value;
    div.appendChild(checkbx);
    div.appendChild(span);
    li.appendChild(div);
    ul.appendChild(li)
    inputtext.value = ''
    checkbx.addEventListener('change',() =>{
        deleteTodo(span.innerText)
    })
    }
}

function getTodos(){
    var todos = [];
    var todos_str = localStorage.getItem('todos');
    if(todos_str != null){
        todos = JSON.parse(todos_str)
    }
    console.log(todos)
    return todos;
}
function addTodos(task){
    var todos = getTodos();
    todos.push(task);
    localStorage.setItem('todos',JSON.stringify(todos))
    return true;
}
function showTodos(){
    var todos = JSON.parse(localStorage.getItem('todos'));
    todos.forEach(todo => {
        let li = document.createElement('li');
    let div = document.createElement('div');
    let span = document.createElement('span');
    let checkbx = document.createElement('input')
    checkbx.type='checkbox'
    checkbx.id='checkbox'
    span.innerText=todo;
    div.appendChild(checkbx);
    div.appendChild(span);
    li.appendChild(div);
    ul.appendChild(li)
    checkbx.addEventListener('change',() =>{
        deleteTodo(span.innerText)
    })
    });
}
function deleteTodo(todo){
    var todos = JSON.parse(localStorage.getItem('todos'));
    let index = todos.findIndex(todos => todos === todo)
    let newTodos =  todos.filter(ele => {
        return ele != todo
    })
    localStorage.setItem('todos',JSON.stringify(newTodos))
    window.location.reload();
}
showTodos();