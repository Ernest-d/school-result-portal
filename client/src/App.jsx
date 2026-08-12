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
<p>Session: 2025/2026</p>
<p>Semester: First Semester</p>

<table>
  <thead>
    <tr>
      <th>Course Code</th>
      <th>Course Name</th>
      <th>Unit</th>
      <th>Score</th>
      <th>Grade</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>CSC101</td>
      <td>Introduction to Computer Science</td>
      <td>3</td>
      <td>72</td>
      <td>A</td>
    </tr>

    <tr>
      <td>MTH101</td>
      <td>Mathematics</td>
      <td>3</td>
      <td>65</td>
      <td>B</td>
    </tr>

    <tr>
      <td>PHY101</td>
      <td>Physics</td>
      <td>3</td>
      <td>58</td>
      <td>C</td>
    </tr>
  </tbody>
</table>

<p>GPA: 3.42</p>


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