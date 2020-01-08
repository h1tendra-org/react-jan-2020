import React from 'react'
import './App.css'
import CategoryList from './components/CategoryList'
import categories from './categories.json'

function App () {
  return <CategoryList categories={categories}/>
}

export default App
