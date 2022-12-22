import './App.css';
import TaskList from "./component/TaskList";
import FormTask from './component/FormTask';

function App() {
  return (
    <div className="App">
      <FormTask/>
      <TaskList/>
    </div>
  );
}

export default App;
