import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Homes from './pages/Homes'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Account from './pages/Account'
import Protected from './components/Protected'

function App() {
console.log('app is rendering ')
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homes/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/account' element={<Protected><Account/></Protected>  }/>

    </Routes>
    </>
  )
}

export default App
