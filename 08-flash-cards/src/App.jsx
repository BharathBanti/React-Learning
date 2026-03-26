import { useState } from 'react'
import './App.css'

const questions = [
  {
    id: 1,
    question: "What is an object in JavaScript?",
    answer: "An object in JavaScript is a collection of key–value pairs, where keys (properties) are strings (or symbols) and values can be any data type, including functions (methods)."
  },
  {
    id: 2,
    question: 'How do you create an object in JavaScript?',
    answer: 'Objects can be created in multiple ways: Object literal {} (most common), Using new Object(), Using a constructor function, Using Object.create()'
  },
  {
    id: 3,
    question: 'What is the difference between dot notation and bracket notation?',
    answer: 'Dot notation: Used when property names are valid identifiers and known at compile time. Bracket notation: Used when property names are dynamic, stored in variables, or contain spaces/special characters.'
  },
  {
    id: 4,
    question: 'How do you access and modify object properties?',
    answer: 'Properties are accessed using dot or bracket notation. You can modify a property by assigning a new value, and add a property by assigning it to a new key.'
  },
  {
    id: 5,
    question: 'What is a method in an object?',
    answer: 'A method is a function stored as a property of an object. It is used to define behavior related to that object.'
  },
  {
    id: 6,
    question: 'What does the this keyword refer to in an object?',
    answer: 'Inside an object method, this refers to the current object that owns the method. Its value depends on how the function is called, not where it is defined.'
  }
]

function App () {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id){
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className='flashcards'>
      {questions.map((question) => (
        <div key={question.id} className={question.id === selectedId ? "selected" : ""} onClick={() => handleClick(question.id)}>
          <p>{question.id === selectedId ? question.answer : question.question}</p>
        </div>
      ))}
    </div>
  )
}

export default App
