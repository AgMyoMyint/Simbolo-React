import React from 'react'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import './App.css'
import Create from './components/Create'
import Edit from './components/Edit'
import List from './components/List'
import Post from './components/Post'

function App() {

  return (
    <>
      <Create />
      <Edit />
      <List />
      <Post />
    </>
  )
}

export default App
