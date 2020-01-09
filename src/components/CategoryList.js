import React from 'react'
import CategoryListItem from './CategoryListItem'

function CategoryList(props) {
  const { categories } = props

  return (
    <ul>
      {categories.map((category, index) => {
        return (
          <CategoryListItem key={category.id} category={category} />
        )
      })}
    </ul>
  )
}

export default CategoryList
