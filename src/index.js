"use strict"

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

function counterReducer( state = { count: 0 }, action ){

  let nextState = {
    count: state.count
  }
  switch( action.type ){
    case "COUNTER_ADD":
      nextState.count = state.count + 1
      return nextState
    case "COUNTER_DELETE":
      nextState.count = state.count - 1
      return nextState
    case "COUNTER_RESET":
      nextState.count = 0
      return nextState
    default:
      return state
  }
}

function todoReducer( state, action ){

  if( typeof state === "undefined" ){
    return {
      todos: []
    }
  }

  let nextState = Object.assign({}, state)

  switch( action.type ){
    case "TODO_ADD":
      nextState.todos.push( action.payload )
      return nextState
      break
    case "TODO_DELETE":
      nextState.todos.pop()
      return nextState
      break
    case "TODO_DELETE_ALL":
      nextState.todos = []
      return nextState
      break
    default:
      return state
  }
}

// const logger = store => next => action => {
//   let result = next(action)
//   console.log('next state', store.getState() )
//   return result
// }

let store = createStore( combineReducers( {counterReducer: counterReducer, todoReducer: todoReducer }), applyMiddleware( createLogger() ))
// const store = createStore( counterReducer, applyMiddleware( createLogger() ))

const elCounter = document.getElementById('counter')

function renderCounter(){
  console.log( store.getState() )
  elCounter.innerHTML = store.getState().counterReducer.count
}

renderCounter()
store.subscribe( renderCounter )

document.getElementById('add').addEventListener('click', e => {
  store.dispatch({type: "COUNTER_ADD" })
})
document.getElementById('delete').addEventListener('click', e => {
  store.dispatch({type: "COUNTER_DELETE" })
})
document.getElementById('reset').addEventListener('click', e => {
  store.dispatch({type: "COUNTER_RESET" })
})


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










