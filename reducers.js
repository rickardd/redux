"use strict"

function counterReducer( state, action ){

  if( typeof state === "undefined" ){
    return { count: 0 }
  }

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

let store = Redux.createStore( Redux.combineReducers( {counterReducer: counterReducer, todoReducer: todoReducer }))


