import React from 'react'
import './App.css'
import CategoryList from './components/CategoryList'
import categories from './categories.json'

function categoryReducer (state, action) {
  let newState
  switch (action.type) {
    case 'update_category':
      newState = {...state}
      newState.categories[action.payload.index] = action.payload.payload
      return newState
    case 'set_category':
      newState = {...state}
      newState.categories = action.payload
      return newState
    case 'remove_category':
      newState = {...state}
      newState.categories.splice(action.payload.index)
      return newState
    default:
      return state
  }
}

function App () {
  const [categoryState, categoryDispatch] = React.useReducer(categoryReducer, {categories})
  return <CategoryList categories={categoryState.categories}
                       onUpdateCategory={
                         (payload) => {                          
                           categoryDispatch({type: 'update_category', payload})
                         }
                       }
                       onRemoveCategory={
                         (payload) => {
                          categoryDispatch({type: 'set_category', payload})
                         }
                       }                       
  />
}

export default App
