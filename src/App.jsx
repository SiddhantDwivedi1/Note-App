import React, { useState, useEffect } from 'react'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'

const API = 'http://localhost:3001/notes'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setTask(data))
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    const newNote = { title, details }

    fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newNote)
    })
      .then(res => res.json())
      .then(data => {
        setTask([...task, data])
        setTitle('')
        setDetails('')
      })
  }

  const deleteNote = (id, idx) => {
    fetch(`${API}/${id}`, { method: 'DELETE' })
      .then(() => {
        const copyTask = [...task]
        copyTask.splice(idx, 1)
        setTask(copyTask)
      })
  }

  return (
    <div className='min-h-screen lg:flex bg-black text-white'>
      <NoteForm
        title={title}
        details={details}
        setTitle={setTitle}
        setDetails={setDetails}
        submitHandler={submitHandler}
      />
      <NoteList
        task={task}
        deleteNote={deleteNote}
      />
    </div>
  )
}

export default App