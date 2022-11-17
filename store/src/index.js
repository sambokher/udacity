function CreateStore() {


  let state
  let listeners = []
  const getState = () => state
  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners.filter((l) => l !== listener)
    }
  }

  return {
    getState, 
    subscribe
  }
}

const store = createStore()
store.subscribe(() => {
  console.log(`The new state is ${store.getState()}`)
})

const unsubcribe = store.subscribe(() => {
  console.log(`The store changed`)
})

unsubcribe()
