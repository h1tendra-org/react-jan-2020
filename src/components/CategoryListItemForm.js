import React from 'react'

function CategoryListItemForm (props) {
  const {category} = props
  const [catName, setCatName] = React.useState(category.name)

  return (
    <React.Fragment>
      <input type="text" name="catName" value={catName} onChange={(e) => setCatName(e.target.value)}/>
      <button type="button" onClick={() => catName ? props.onSave(catName) : null}>SAVE</button>
      <button type="button" onClick={() => props.onCancel(catName)}>X</button>
    </React.Fragment>
  )
}

export default CategoryListItemForm
