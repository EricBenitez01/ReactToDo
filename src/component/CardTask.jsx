import React from 'react';
import {useContext} from 'react';
import TaskContext from '../context/TaskContext'

function CardTask({task}) {
    const {deleteTask} = useContext(TaskContext)
  return (
    <div className='bg-gray-800 text-white rounded-lg p-5'>
    <h1 className='text-xl font-bolt capitalize ' >{task.title}</h1> 
    <p className='text-gray-500 text-sm'> {task.description} </p>
    <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-900 ' onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  )
}

export default CardTask