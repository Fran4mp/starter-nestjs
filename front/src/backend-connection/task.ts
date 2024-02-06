import { CreateTask, UpdateTask } from "../types/task.type"

export const createTaskRequest = (task: CreateTask) => 
    fetch (`http://localhost:3000/api/tasks`,{
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    })

export const getTaskRequest = () => fetch(`http://localhost:3000/api/tasks`)

export const deleteTaskRequest = (id: string) => 
    fetch(`http://localhost:3000/api/tasks/${id}`,
    {method: "DELETE",}); 

export const updateTaskRequest = (id: string, task: UpdateTask ) => 
    fetch(`http://localhost:3000/api/tasks/${id}`,
        {method: "PUT",
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json",
        }
    });