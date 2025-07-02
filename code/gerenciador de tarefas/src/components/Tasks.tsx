import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onTaskDelete }) {
    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`);
    }

    return (
        <div>
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
                {tasks.map((task) => (
                    <li key={task.id} className="flex gap-2">
                        <button
                            onClick={() => onTaskClick(task.id)}
                            className={`bg-slate-400 text-white p-2 rounded-md w-full text-left ${task.isCompleted ? "line-through text-green-500" : ""}`}>
                            {task.title}
                        </button>
                        <button
                            className="bg-slate-400 p-2 rounded-md text-white"
                            onClick={() => onSeeDetailsClick(task)}
                        >
                            <ChevronRightIcon />
                        </button>
                        <button
                            className="bg-slate-400 p-2 rounded-md text-white"
                            onClick={() => onTaskDelete(task.id)}
                        >
                            <TrashIcon />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Tasks;