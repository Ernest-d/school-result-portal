import { useState } from 'react'
import './App.css'
import { student, results } from './data'

function App() {
  const [showResult, setShowResult] = useState(false)

  if (showResult) {
    return (
      <div className="app">
        <h1>My Result</h1>

<p>Student ID: {student.id}</p>
<p>Name: {student.name}</p>
<p>Session: {student.session}</p>
<p>Semester: {student.semester}</p>

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
    {results.map((result) => (
  <tr key={result.courseCode}>
    <td>{result.courseCode}</td>
    <td>{result.courseName}</td>
    <td>{result.unit}</td>
    <td>{result.score}</td>
    <td>{result.grade}</td>
  </tr>
))}
  </tbody>
</table>

<p>GPA: {student.gpa}</p>


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