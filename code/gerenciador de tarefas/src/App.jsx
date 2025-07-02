import Tasks from "./components/Tasks.tsx";
import {useState} from "react";
import AddTask from "./components/AddTask.tsx";
import {v4} from "uuid";


function App() {
const [tasks, setTasks] = useState([
    { id: 1, title: "Estudar programação",description:"Estudar programação para se tornar um dev melhor", isCompleted: true },
    { id: 2, title: "Estudar a renata",description:"Estudar a Renata para compreender mulheres malucas", isCompleted: false },
    { id: 3, title: "Estudar programação",description:"Estudar programação para se tornar um dev melhor", isCompleted: false },
]);

function onTaskClick(taskId){
    const newTasks = tasks.map(task =>{
        if(task.id === taskId){
            return {...task, isCompleted: !task.isCompleted};
        }
        return task;
    })
    setTasks(newTasks);
}

function onTaskDelete(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
}

function onTaskAddSubmit(title, description){
    const newTasks= {
        id: v4(),
        title,
        description,
        isCompleted: false
    };
    setTasks([...tasks, newTasks]);
}

  return (
    <div className={"w-screen h-screen flex justify-center p-6 bg-blue-300"}>
        <div className="w-[600px] space-y-4">
            <h1 className={"text-3xl text-slate-100 font-bold text-center"}>
                Gerenciar Terefas
            </h1>
            <AddTask onTaskAddSubmit={onTaskAddSubmit}/>
            <Tasks tasks={tasks} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete}  />

        </div>



    </div>
  )
}

export default App
