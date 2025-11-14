import React from 'react'
import { Route,Routes } from 'react-router'
import Layout from './Layout/Layout'
// import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import About from './Pages/About'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element="Home"/>
      <Route path="Menu" element={<Menu/>}/>
      <Route path="Contact" element={<Contact/>} />
      <Route path="About" element={<About/>}/>

      </Route>
    </Routes>
    </>
    
  )
}

export default App
