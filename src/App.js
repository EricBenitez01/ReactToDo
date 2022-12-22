import './App.css';
import TaskList from "./component/TaskList";
import FormTask from './component/FormTask';
import {useState, useEffect} from 'react';
import {data}  from './data';

function App() {
  const [task, setTask] = useState([]);
    useEffect(() => {
      setTask(data);
    
      
    }, [])
  const createTask = (taskTitle) => {
    setTask([...task, {
    id: task.length,
    title: taskTitle,
    description: "nueva tarea"   
    }]) 
  }
  return (
    <div className="App">
      <FormTask createTask= {createTask} />
      <TaskList task={task} />
    </div>
  );
}

export default App;
