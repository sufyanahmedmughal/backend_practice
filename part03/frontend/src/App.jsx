import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([]);
  return (
    <>
      <h1>Jokes</h1>
      <h2>
        Total Jokes: {jokes.length}
      </h2>
      {
        jokes.map((jokes) => {
          <div>
            <p>{jokes.title}</p>
            <p>{jokes.content}</p>
          </div>

        })
      }
    </>
  )
}

export default App
