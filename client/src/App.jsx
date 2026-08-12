import { useState } from 'react'
import './App.css'

function App() {
  const [showResult, setShowResult] = useState(false)

  if (showResult) {
    return (
      <div className="app">
        <h1>My Result</h1>

        <p>Student ID: 12345</p>
        <p>Name: Ernest Uko</p>

        <button onClick={() => setShowResult(false)}>
          Back
        </button>
      </div>
    )
  }

  return (
    <div className="app">
      <h1>School Result Portal</h1>

      <p>A simple way to access student results.</p>

      <button onClick={() => setShowResult(true)}>
        View Result
      </button>
    </div>
  )
}

export default App