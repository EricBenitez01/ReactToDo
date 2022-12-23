import './App.css';
import TaskList from "./component/TaskList";
import FormTask from './component/FormTask';



function App() {
  
  return (
    <main className="bg-zinc-900 h-screen">
      <div className='conteiner mx-auto p-10'>
      <FormTask/>
      <TaskList/>
      </div>
    </main>
  );
}

export default App;
