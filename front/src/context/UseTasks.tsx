import { useContext } from "react";
import { TaskContext } from "./TaskContext";


export const useTasks = () => {
    const context = useContext (TaskContext)
    
    return context
}