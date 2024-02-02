import React from 'react'

//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import './App.css'
import Header from './components/Header'
import ToDosLogic from './components/ToDosLogic'

function App() {

  return (
    <>
      <Header />
      <ToDosLogic/>
    </>
  )
}

export default App
