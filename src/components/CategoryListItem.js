import React from 'react'
import CategoryList from './CategoryList'
import CategoryListItemForm from './CategoryListItemForm'
import { useDispatch } from 'react-redux'

function CategoryListItem(props) {
  const { category } = props
  const { children } = category
  const [editMode, setEditMode] = React.useState(!category.name)
  const dispatch = useDispatch()

  return (
    <li>
      {
        editMode ?
          <React.Fragment>
            <CategoryListItemForm
              category={category}
              onSave={(name) => {
                const payload = { ...category, name }
                dispatch({ type: 'update_category', payload })
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
              const payload = { parent_id: category.id }
              dispatch({ type: 'add_category', payload })
            }}>+
            </button>
            <button type="button" onClick={() => {
              const payload = category
              dispatch({ type: 'remove_category', payload })
            }}>-
            </button>
          </React.Fragment>
      }

      {children && children.length > 0 ? <CategoryList categories={children} /> : null}
    </li>
  )
}

export default CategoryListItem
