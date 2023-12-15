import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import reactLogo from '/src/assets/images/react.svg'
import viteLogo from '/vite.svg'
import Header from "/src/components/Header.jsx";
import '/src/assets/stylesheets/App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <h2>This will be my thingy! I want to build a lot of stuff here</h2>
      </div>
    </>
  )
}

export default App
