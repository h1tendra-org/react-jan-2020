import React from 'react'
import CategoryList from './CategoryList'
import CategoryListItemForm from './CategoryListItemForm'

function CategoryListItem (props) {
  const {category} = props
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
                props.onUpdateCategory({...category, name})
                setEditMode(false)
              }}
              onCancel={() => setEditMode(false)}
            />
          </React.Fragment>
          :
          <React.Fragment>
            {category.name}
            <button type="button" onClick={() => setEditMode(true)}>Edit</button>
            <button type="button" onClick={() => props.onAddChildren()}>+</button>
            <button type="button" onClick={() => props.onDeleteChildren()}>-</button>
          </React.Fragment>
      }
      {children ? <CategoryList categories={children}/> : null}
    </li>
  )
}

export default CategoryListItem
