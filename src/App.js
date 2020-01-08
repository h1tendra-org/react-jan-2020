import React from 'react'
import './App.css'
import CategoryList from './components/CategoryList'
import categories from './categories.json'

function categoryReducer(state, action) {
  let newState
  switch (action.type) {
    case 'update_category':
      newState = { ...state }
      newState.categories[action.payload.index] = action.payload.payload
      return newState
    case 'set_category':
      newState = { ...state }
      newState.categories = action.payload
      return newState
    case 'remove_category':
      newState = { ...state }
      newState.categories.splice(action.payload.index)
      return newState
    case 'add_category':
      newState = { ...state }
      newState.categories.push({
        name: '',
        id: newState.categories.length + 1,
        parent_id: newState.id,
        children: [],
      })
      return newState
    default:
      return state
  }
}

function App() {
  const [categoryState, categoryDispatch] = React.useReducer(categoryReducer, { categories })
  return <React.Fragment>
    <div>
      <button type="button" onClick={() => categoryDispatch({ type: 'add_category' })}>Add parent category</button>
    </div>
    <CategoryList categories={categoryState.categories}
      onUpdateCategory={
        (payload) => {
          categoryDispatch({ type: 'update_category', payload })
        }
      }
      onRemoveCategory={
        (payload) => {
          categoryDispatch({ type: 'set_category', payload })
        }
      }
    />
  </React.Fragment>
}

export default App
