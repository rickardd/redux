

const elCounter = document.getElementById('counter')

function renderCounter(){
  elCounter.innerHTML = store.getState().counterReducer.count
}

document.getElementById('add').addEventListener('click', e => {
  store.dispatch({type: "COUNTER_ADD" })
})
document.getElementById('delete').addEventListener('click', e => {
  store.dispatch({type: "COUNTER_DELETE" })
})
document.getElementById('reset').addEventListener('click', e => {
  store.dispatch({type: "COUNTER_RESET" })
})

renderCounter()

store.subscribe( renderCounter )