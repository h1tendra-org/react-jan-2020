import React from 'react'
import CategoryListItem from './CategoryListItem'

function categoryReducer (state, action) {
  let newState
  switch (action.type) {
    case 'update_category':
      newState = {...state}
      newState.categories[action.payload.index] = {...newState.categories[action.payload.index], ...action.payload.data}
      return newState
    case 'add_children':
      newState = {...state}
      newState.categories[action.payload.index].children.push({
        name: '',
        id: newState.categories[action.payload.index].children.length + 1,
        parent_id: newState.categories[action.payload.index].id,
        children: [],
      })
      return newState
    default:
      return state
  }
}

function CategoryList (props) {
  const {categories} = props
  const [categoryState, categoryDispatch] = React.useReducer(categoryReducer, {categories})

  return (
    <ul>
      {categoryState.categories.map((category, index) => {
        return (
          <CategoryListItem key={category.id} category={category}
                            onUpdateCategory={
                              (payload) => {
                                categoryDispatch({type: 'update_category', payload: {index, data: payload}})
                              }
                            }
                            onAddChildren={
                              () => {
                                categoryDispatch({type: 'add_children', payload: {index}})
                              }
                            }
          />
        )
      })}
    </ul>
  )
}

export default CategoryList
