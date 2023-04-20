import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HeadlinesCards from './Components/HeadlinesCards'
import Food from './Components/Food'
import Category from './Components/Category'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <HeadlinesCards/>
     <Food/>
     <Category/>
    </div>
  )
}

export default App
