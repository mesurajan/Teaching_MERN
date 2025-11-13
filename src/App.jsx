import { useState } from 'react'
import Layout from './Layout/Layout.jsx'
import Home from './Pages/Home.jsx'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element ={<Home/>}/>
        </Route>


      </Routes>
      
        
    </>
  )
}

export default App
