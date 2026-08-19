import { useState } from 'react'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')

  const [showResult, setShowResult] = useState(false)
  const [fullName, setFullName] = useState('')
  const [examYear, setExamYear] = useState('')
  const [selectedStudent, setSelectedStudent] = useState(null)

  // Password screen
  if (!isAuthenticated) {
    return (
      <div className="app">
        <h1>School Result Portal</h1>

        <p>Enter password to access the portal.</p>

        <input
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={() => {
            if (password === 'school123') {
              setIsAuthenticated(true)
            } else {
              alert('Incorrect password. Please try again.')
            }
          }}
        >
          Enter Portal
        </button>
      </div>
    )
  }

  // Result page
  if (showResult && selectedStudent) {
    return (
      <div className="app">
        <h1>My Result</h1>

        <p>Student ID: {selectedStudent.id}</p>
        <p>Name: {selectedStudent.name}</p>
        <p>Session: {selectedStudent.session}</p>
        <p>Semester: {selectedStudent.semester}</p>

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
            {selectedStudent.results.map((result) => (
              <tr key={result.course_code}>
                <td>{result.course_code}</td>
                <td>{result.course_name}</td>
                <td>{result.unit}</td>
                <td>{result.score}</td>
                <td>{result.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p>GPA: {selectedStudent.gpa}</p>

        <button
          onClick={() => {
            setShowResult(false)
            setSelectedStudent(null)
            setFullName('')
            setExamYear('')
          }}
        >
          Back
        </button>
      </div>
    )
  }

  // Homepage
  return (
    <div className="app">
      <h1>School Result Portal</h1>

      <p>A simple way to access student results.</p>

      <button onClick={() => setShowResult('search')}>
        View Result
      </button>

      {showResult === 'search' && (
        <div>
          <h2>Find Student Result</h2>

          <input
            type="text"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Exam Year"
            value={examYear}
            onChange={(e) => setExamYear(e.target.value)}
          />

          <button
onClick={async () => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/results?name=${encodeURIComponent(fullName)}&year=${encodeURIComponent(examYear)}`
    )

    if (!response.ok) {
      alert('Student result not found. Please check the details.')
      return
    }

    const student = await response.json()

    setSelectedStudent(student)
    setShowResult(true)
  } catch (error) {
    console.error('Error fetching student result:', error)

    alert(
      'Unable to connect to the server. Please make sure the backend is running.'
    )
  }
}}
          >
            View Result
          </button>
        </div>
      )}
    </div>
  )
}

export default App