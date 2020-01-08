import React from 'react'
import CategoryList from './CategoryList'
import CategoryListItemForm from './CategoryListItemForm'

function CategoryListItem (props) {
  const {category, index} = props
  const {children} = category
  const [editMode, setEditMode] = React.useState(!category.name)

  return (
    <li>
      {
        editMode ?
          <React.Fragment>
            <CategoryListItemForm
              category={category}
              onSave={(name) => {
                props.onUpdateCategory({payload: {...category, name}, index})
                setEditMode(false)
              }}
              onCancel={() => setEditMode(false)}
            />
          </React.Fragment>
          :
          <React.Fragment>
            {category.name}
            <button type="button" onClick={() => setEditMode(true)}>Edit</button>
            <button type="button" onClick={() => {
              let newState = {...category}
              newState.children = [
                ...newState.children, {
                  name: '',
                  id: newState.children.length + 1,
                  parent_id: newState.id,
                  children: [],
                }]
              props.onUpdateCategory({payload: newState, index})
            }}>+
            </button>
            <button type="button" onClick={() => {
              props.onRemoveCategory()
            }}>-
            </button>
          </React.Fragment>
      }
      {children ? <CategoryList categories={children}
                                onUpdateCategory={
                                  (payload) => {
                                    let newState = {...category}
                                    newState.children[payload.index] = payload.payload
                                    props.onUpdateCategory(newState)
                                  }
                                }
                                onRemoveCategory={
                                  (payload) => {                                    
                                    let newState = {...category}
                                    newState.children = payload
                                    props.onUpdateCategoryInd(newState)
                                  }
                                }
                                />
        : null}
    </li>
  )
}

export default CategoryListItem
