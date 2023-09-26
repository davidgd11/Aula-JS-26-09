import { } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Rodape from './components/Rodape'

function App() {


  return (
    <>
      <Nav/>
      <Outlet/>
      <Rodape/>
    </>
  )
}

export default App
