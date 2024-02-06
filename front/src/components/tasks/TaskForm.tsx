import { ChangeEvent, FormEvent, useState } from 'react'
import { useTasks } from '../../context/UseTasks';

function TaskForm() { 
    const [task, setTask] = useState({
        title: "",
        description: "",
        done: false,
    })
    const {createTask} = useTasks();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setTask({...task, [e.target.name]: e.target.value});
    }
    const handleSubmit =(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createTask(task);
    }
  return (
    <div className='container-wrapper main-content'>
        <form className='form-model' onSubmit={handleSubmit}>
            <input  className='form-input'
                    type= "text" 
                    name= "title"
                    placeholder= 'Título de la tarea' 
                    onChange={handleInputChange}/>

            <textarea   className='form-input'
                        name= "description" 
                        rows= {4} 
                        placeholder='Añade una descripción a tu tarea'
                        onChange={handleInputChange} >
            </textarea>           
            <button className='button-model'>Guardar tarea</button>
        </form>
    </div>
  )
}

export default TaskForm