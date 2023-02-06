import { useState } from 'react'
import { About, Contact, Home, Portfolio } from './pages'
import './App.css'
import Blog from './pages/blogs/blog'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className="App">
     <Home/>
     <About/>
     <Contact/>
     <Portfolio/>
     <Blog/>

    </div>
  )
}

export default App
