import React, { useState, useEffect } from 'react'
import {data}  from '../data';


function TaskList() {
    const [task, setTask] = useState([]);
    useEffect(() => {
      setTask(data);
    
      
    }, [])
    if (task.length ===  0){
        return  <h1>No hay tareas guardadas</h1> 
    } else {
        return (
    <div>
        {task.map((task, i) => 
    <> 
    <div key={i} >{task.title}</div>
    <p> {task.description} </p>
    </>
    )}
    </div>
  )}
}

export default TaskList