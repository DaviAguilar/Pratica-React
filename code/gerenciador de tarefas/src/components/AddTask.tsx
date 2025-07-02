import { useState } from "react";

function AddTask({ onTaskAddSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className={"space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col"}>
            <input
                type='text'
                placeholder={"Digite o titulo da tarefa"}
                className={"border-slate-400 outline-slate-400 px-4 py-2 rounded-md"}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <input
                type='text'
                placeholder={"Digite a descricao da tarefa"}
                className={"border-slate-400 outline-slate-400 px-4 py-2 rounded-md"}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button
                className="bg-slate-400 py-2 px-4 rounded-md text-white roudnded-md font-medium"
                onClick={() => {
                    if (!title.trim() || !description.trim() ) {
                        return alert("Titulo ou descricao nao podem ser vazios!")
                    }
                    onTaskAddSubmit(title, description);
                    setTitle("");
                    setDescription("");
                }}
            >
                Adicionar Tarefa
            </button>
        </div>
    );
}

export default AddTask;