import React from 'react'
import {useState, useContext} from 'react';
import TaskContexct from '../context/TaskContext'



function FormTask() {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const {createTask} = useContext(TaskContexct);
const handlerSubmit = (e) => {
    e.preventDefault();
    createTask({
        title,
        description
    })
    setTitle("")
    setDescription("")
}
  return (
    <div className='max-w-md mx-auto '>
        <form className='bg-slate-800 p-10 mb-4 rounded-lg' onSubmit={handlerSubmit}>
            <h1 className='text-2xl font-bolt text-white mb-3'>Crea tu tarea</h1>
            <input className='bg-slate-300 p-3 w-full mb-2' placeholder = "Escribe tu nueva tarea"
            onChange = { (e) => setTitle(e.target.value)} value={title} autoFocus />
            <textarea className='bg-slate-300 p-3 w-full mb-2' placeholder='Añade una descripcion' 
            onChange = {(e) => setDescription(e.target.value)} value={description} ></textarea>
            <button className='bg-indigo-500 px-3 py-1 text-withe'>Guardar Tarea</button>
        </form>
    </div>
  )
}

export default FormTask;