import { createContext, useState, useEffect } from "react";
import { getTaskRequest, createTaskRequest, deleteTaskRequest, updateTaskRequest } from "../backend-connection/task";
import { CreateTask, Task, UpdateTask } from "../types/task.type";

type TaskContextType = {
    tasks: Task[]
    createTask: (task : CreateTask) => Promise<void>;
    deleteTask: (id: string) => Promise<void>;
    updateTask: (id:string, task:UpdateTask) => Promise<void>;
}

export const TaskContext = createContext<TaskContextType>({
    tasks: [],
    createTask: async () => {},
    deleteTask: async () => {},
    updateTask: async () => {},
})

type TaskProps = {
    children: React.ReactNode;
}

export const TaskProvider: React.FC<TaskProps> = ({children}) => {
    
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(()=> {
        getTaskRequest()
            .then((response) => response.json())
            .then((data) => setTasks(data))
    },[]);

    const  createTask = async (task: CreateTask) => {
        const res = await createTaskRequest(task)
        const data = await res.json()
        if(!data.title) return;
            else setTasks([...tasks, data]);
        
    }
    const deleteTask = async(id:string) => {
        const res = await deleteTaskRequest(id);
        if (res.status === 204){
            setTasks(tasks.filter(task => task._id !== id))
        };
    }
    const updateTask = async (id: string, task: UpdateTask) => {
       const res = await updateTaskRequest(id, task);
       const data = await res.json();
       setTasks(
        tasks.map(task => task._id === id ? {...task, ...data}: task)
       );
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask,
            updateTask
            }}>
            {children}
        </TaskContext.Provider>
    )
}