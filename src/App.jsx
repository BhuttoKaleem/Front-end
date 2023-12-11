import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import  {Footer}  from './Components/Footer'
function App() {

  return (
    <>
    <Header/>
    <Footer/>
      <h1 className='bg-red-900 text-gray-300'>tailwind is working</h1>
    </>
  )
}

export default App
