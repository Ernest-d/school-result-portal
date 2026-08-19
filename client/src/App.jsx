import { useState } from 'react'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')

  const [showSearch, setShowSearch] = useState(false)
  const [fullName, setFullName] = useState('')
  const [examYear, setExamYear] = useState('')

  const [selectedStudent, setSelectedStudent] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    if (password === 'school123') {
      setIsAuthenticated(true)
    } else {
      alert('Incorrect password. Please try again.')
    }
  }

  const handleSearch = async () => {
    if (!fullName.trim() || !examYear.trim()) {
      alert('Please enter the full name and exam year.')
      return
    }

    setLoading(true)

    try {
      const response = await fetch(
        `/api/results?name=${encodeURIComponent(fullName)}&year=${encodeURIComponent(examYear)}`
      )

      if (!response.ok) {
        alert('Student result not found. Please check the details.')
        setLoading(false)
        return
      }

      const student = await response.json()

      setSelectedStudent(student)
    } catch (error) {
      console.error(error)

      alert(
        'Unable to connect to the server. Please make sure the server is running.'
      )
    }

    setLoading(false)
  }

  const handleBack = () => {
    setSelectedStudent(null)
    setFullName('')
    setExamYear('')
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setPassword('')
    setShowSearch(false)
    setSelectedStudent(null)
    setFullName('')
    setExamYear('')
  }

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="page">
        <div className="login-card">
          <div className="logo-circle">SR</div>

          <h1>School Result Portal</h1>

          <p className="subtitle">
            Enter the portal password to continue.
          </p>

          <label>Password</label>

          <input
            type="text"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleLogin()
              }
            }}
          />

          <button className="primary-button" onClick={handleLogin}>
            Enter Portal
          </button>
        </div>
      </div>
    )
  }

  // Result screen
  if (selectedStudent) {
    return (
      <div className="page">
        <div className="result-card">
          <div className="result-header">
            <div>
              <p className="small-title">STUDENT RESULT</p>
              <h1>My Result</h1>
            </div>

            <div className="student-badge">
              Student {selectedStudent.id}
            </div>
          </div>

          <div className="student-info">
            <div>
              <span>Student ID</span>
              <strong>{selectedStudent.id}</strong>
            </div>

            <div>
              <span>Name</span>
              <strong>{selectedStudent.name}</strong>
            </div>

            <div>
              <span>Exam Year</span>
              <strong>{selectedStudent.exam_year}</strong>
            </div>

            <div>
              <span>Session</span>
              <strong>{selectedStudent.session}</strong>
            </div>

            <div>
              <span>Semester</span>
              <strong>{selectedStudent.semester}</strong>
            </div>
          </div>

          <div className="table-wrapper">
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
                  <tr key={result.id || result.course_code}>
                    <td>{result.course_code}</td>
                    <td>{result.course_name}</td>
                    <td>{result.unit}</td>
                    <td>{result.score}</td>
                    <td>
                      <span className="grade">
                        {result.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="gpa-box">
            <span>Current GPA</span>
            <strong>{selectedStudent.gpa}</strong>
          </div>

          <div className="result-actions">
            <button className="secondary-button" onClick={handleBack}>
              Back
            </button>

            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Search screen
  return (
    <div className="page">
      <div className="main-card">
        <div className="logo-circle">SR</div>

        <p className="small-title">WELCOME</p>

        <h1>School Result Portal</h1>

        <p className="subtitle">
          A simple way to access student results.
        </p>

        {!showSearch ? (
          <button
            className="primary-button"
            onClick={() => setShowSearch(true)}
          >
            View Result
          </button>
        ) : (
          <div className="search-section">
            <h2>Find Student Result</h2>

            <p className="search-description">
              Enter the student's full name and year of examination.
            </p>

            <label>Full Name</label>

            <input
              type="text"
              placeholder="e.g. Ernest Uko"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <label>Year of Examination</label>

            <input
              type="text"
              placeholder="e.g. 2025"
              value={examYear}
              onChange={(e) => setExamYear(e.target.value)}
            />

            <button
              className="primary-button"
              onClick={handleSearch}
              disabled={loading}
            >
              {loading ? 'Searching...' : 'View Result'}
            </button>

            <button
              className="text-button"
              onClick={() => {
                setShowSearch(false)
                setFullName('')
                setExamYear('')
              }}
            >
              Cancel
            </button>
          </div>
        )}

        <p className="footer-text">
          Student Result Management System
        </p>
      </div>
    </div>
  )
}

export default App