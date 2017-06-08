

// let store = Redux.createStore( todoReducer )
// store.subscribe( renderTodos )

const elmInput = document.getElementById("todoInput")
const elmTodoList = document.getElementById("todo-list")

document.getElementById("todo-add").addEventListener('click', e => {
  store.dispatch({type: "TODO_ADD", payload: elmInput.value })
})
document.getElementById("todo-delete").addEventListener('click', e => {
  store.dispatch({type: "TODO_DELETE"})
})
document.getElementById("todo-delete-all").addEventListener('click', e => {
  store.dispatch({type: "TODO_DELETE_ALL"})
})

function renderTodos(){
  const state = store.getState()
  elmTodoList.innerHTML = ''
  for (let i = 0; i < state.todoReducer.todos.length; i++) {

    let li = document.createElement("li")
    li.innerHTML = state.todoReducer.todos[i]
    elmTodoList.appendChild(li)
  }

}


store.subscribe( renderTodos )


