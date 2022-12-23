import React from 'react';
import {createContext, useState, useEffect} from 'react';
import {data}  from '../data';

export const TaskContext = createContext();

export function TaskContextPovider(props) {
    const [tasks, setTask] = useState([]);
    useEffect(() => {
      setTask(data); 
    }, [])

  const createTask = (newTask) => {
    setTask([...tasks, {
    id: tasks.length,
    title: newTask.title,
    description: newTask.description   
    }]) 
  }

  const deleteTask = (taskID) => {
    setTask(tasks.filter(tasks => tasks.id !== taskID))
    
  }
  return (
    <TaskContext.Provider value={
        {
        tasks,
        deleteTask,
        createTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContext;