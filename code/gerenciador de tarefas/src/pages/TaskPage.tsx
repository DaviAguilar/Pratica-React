import {useNavigate, useSearchParams} from "react-router-dom";
import {ChevronLeftIcon, ChevronRightIcon} from "lucide-react";

function TaskPage() {
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    const navigate = useNavigate();

    return (
        <div className={"h-screen w-screen bg-slate-500 p-6"}>
            <div className={"w-[500px] space-y-4"}>
                <div className={"flex justify-center relative mb-6"}>
                    <button className="absolute left-0 top-0 bottom-0 bg-slate-500" onClick={() => navigate(-1)}>
                        <ChevronLeftIcon />
                    </button>
                    <h1 className={"text-3xl text-slate-100 font-bold text-center"}>
                        Detalhes da Tarefa
                    </h1>
                </div>


                <div className={"bg-slate-200 p-4 rounded-md"}>
                    <h2 className={"bg-slate-300 shadow rounded-mb text-slate-600 space-y-4 p-6 rounded-md"}
                    >
                        {title}
                        <p className={"text-white"}>{description}</p>
                    </h2>

                </div>
            </div>



        </div>
    )
}

export default TaskPage