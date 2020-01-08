import React from 'react'
import CategoryListItem from './CategoryListItem'

function CategoryList (props) {
  const {categories} = props

  return (
    <ul>
      {categories.map((category, index) => {
        return (
          <CategoryListItem key={category.id}
                            category={category}
                            index={index}
                            onUpdateCategory={
                              (payload) => {
                                props.onUpdateCategory(payload)
                              }
                            }
                            onRemoveCategory={
                              () => {                              
                                let newState = [...categories]
                                newState.splice(index, 1)
                                props.onRemoveCategory(newState)
                              }
                            }
                            onUpdateCategoryInd={
                              (payload) => {                              
                                props.onUpdateCategory({payload, index})
                              }
                            }
                            />
        )
      })}
    </ul>
  )
}

export default CategoryList
