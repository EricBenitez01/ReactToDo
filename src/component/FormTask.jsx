import React from 'react'
import {useState} from 'react'

function FormTask({createTask} ) {
const [title, setTitle] = useState("")
const handlerSubmit = (e) => {
    e.preventDefault();
    createTask(title)
}
  return (
    <form onSubmit={handlerSubmit}>
        <input placeholder = "Guarda tu nueva tarea"
        onChange = { (e) => setTitle(e.target.value)} />
        <button>Guardar</button>
    </form>
  )
}

export default FormTask;