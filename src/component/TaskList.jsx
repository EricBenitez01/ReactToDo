function TaskList(props) {
    
    if (props.task.length ===  0){
        return  <h1>No hay tareas guardadas</h1> 
    } else {
        return (
    <div>
        {props.task.map((task) => 
    
    <div key={task.id} >
    <h1>{task.title}</h1> 
    <p key={task.id}> {task.description} </p>
    </div>
    )}
    </div>
  )}
}

export default TaskList;