import React from 'react'
import './App.css'
import Category from './components/Category'

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return <Provider store={store}>
    <Category />
  </Provider>
}

export default App
