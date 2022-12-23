import CardTask from './CardTask';
import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';


function TaskList() {
    const {tasks} = useContext(TaskContext)
    if (tasks.length ===  0){
        return  <h1 className='text-white text-4xl font-bolt text-center'>No hay tareas guardadas</h1> 
    } else {
        return (
    <div className='grid grid-cols-5 gap-2 p-4  ' >
        {tasks.map((task) => 
            <CardTask key={task.id}  task={task} />
    )}
    </div>
  )}
}

export default TaskList;