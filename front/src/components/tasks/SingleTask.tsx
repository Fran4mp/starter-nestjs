import React from 'react'
import { Task } from '../../types/task.type'
import { useTasks } from '../../context/UseTasks';
import {IoCheckmarkDone, IoTrash} from 'react-icons/io5'

interface taskProps{
    task: Task;
}

function SingleTask ({task}:taskProps){
  const {deleteTask, updateTask}  = useTasks()
  return (
    <div className='main-content container-wrapper'  key={task._id}>
      <div className='item-model'>  
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
        </div>
      <div>
            <button 
                  onClick={() => {
                    updateTask(task._id, {
                      done: !task.done
                    })
                  }}
                  className={!task.done ? "hecho" : "no-hecho"}
            > <IoCheckmarkDone/></button>
            <IoTrash onClick={async () => 
              {if (!window.confirm("Seguro que quieres eliminar la tarea?"))
              return;
              await deleteTask(task._id)}}></IoTrash>
        </div>
      </div>  
  </div>
  );
}

export default SingleTask