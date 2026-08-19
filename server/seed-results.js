const db = require('./database')

const results = [
  // Ernest Uko - student id 1
  {
    student_id: 1,
    course_code: 'CSC101',
    course_name: 'Introduction to Computer Science',
    unit: 3,
    score: 72,
    grade: 'A'
  },
  {
    student_id: 1,
    course_code: 'MTH101',
    course_name: 'Mathematics',
    unit: 3,
    score: 65,
    grade: 'B'
  },
  {
    student_id: 1,
    course_code: 'PHY101',
    course_name: 'Physics',
    unit: 3,
    score: 58,
    grade: 'C'
  },

  // John Doe - student id 2
  {
    student_id: 2,
    course_code: 'CSC101',
    course_name: 'Introduction to Computer Science',
    unit: 3,
    score: 68,
    grade: 'B'
  },
  {
    student_id: 2,
    course_code: 'MTH101',
    course_name: 'Mathematics',
    unit: 3,
    score: 61,
    grade: 'B'
  },
  {
    student_id: 2,
    course_code: 'PHY101',
    course_name: 'Physics',
    unit: 3,
    score: 55,
    grade: 'C'
  },

  // Jane Doe - student id 3
  {
    student_id: 3,
    course_code: 'CSC101',
    course_name: 'Introduction to Computer Science',
    unit: 3,
    score: 81,
    grade: 'A'
  },
  {
    student_id: 3,
    course_code: 'MTH101',
    course_name: 'Mathematics',
    unit: 3,
    score: 74,
    grade: 'A'
  },
  {
    student_id: 3,
    course_code: 'PHY101',
    course_name: 'Physics',
    unit: 3,
    score: 63,
    grade: 'B'
  },

  // David James - student id 4
  {
    student_id: 4,
    course_code: 'CSC101',
    course_name: 'Introduction to Computer Science',
    unit: 3,
    score: 59,
    grade: 'C'
  },
  {
    student_id: 4,
    course_code: 'MTH101',
    course_name: 'Mathematics',
    unit: 3,
    score: 54,
    grade: 'C'
  },
  {
    student_id: 4,
    course_code: 'PHY101',
    course_name: 'Physics',
    unit: 3,
    score: 49,
    grade: 'D'
  }
]

const insertResult = db.prepare(`
  INSERT INTO results
  (student_id, course_code, course_name, unit, score, grade)
  VALUES (?, ?, ?, ?, ?, ?)
`)

for (const result of results) {
  insertResult.run(
    result.student_id,
    result.course_code,
    result.course_name,
    result.unit,
    result.score,
    result.grade
  )
}

console.log('Course results added to database.')