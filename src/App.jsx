import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Layout/Header'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
<BrowserRouter>
<Header/>
<Home/>
<Routes>
  <Route path=''/>
</Routes>
</BrowserRouter>
  )
}

export default App
