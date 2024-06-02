import { useState } from 'react'
import './App.css'
import CV from './CV/CV'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class='title-bar'>
        <h1>The Odin Project exercises</h1>
        <nav>
          <ul class='directories'>
            <li><a href='/CV/CV.jsx'>CV</a></li>
            <li><a >Anotha</a></li>
          </ul>
        </nav>
      </div>
      <hr></hr>
      <CV/>
    </>
  )
}

export default App
