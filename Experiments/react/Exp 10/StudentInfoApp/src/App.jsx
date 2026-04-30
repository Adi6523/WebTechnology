import Student from './components/Student'
import './App.css'

function App() {
  const students = [
    { id: 1, name: 'Aditya', age: 22, course: 'AIML' },
    { id: 2, name: 'Piyush', age: 21, course: 'AIML' },
    { id: 3, name: 'Prajwal', age: 22, course: 'AIML' },
    { id: 4, name: 'Siddhant', age: 22, course: 'AIML' }
  ]

  const showMessage = () => {
    alert('Button Clicked!')
  }

  return (
    <div className="container mt-5 text-center">
      <h1>React Functional Components & Event Handling</h1>

      <button className="btn btn-primary my-3" onClick={showMessage}>
        Click Me
      </button>

      <div className="row">
        {students.map((student) => (
          <Student
            key={student.id}
            name={student.name}
            age={student.age}
            course={student.course}
          />
        ))}
      </div>
    </div>
  )
}

export default App