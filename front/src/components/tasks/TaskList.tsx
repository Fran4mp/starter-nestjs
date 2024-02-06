import React from 'react'
import SingleTask from './SingleTask'
import { useTasks } from '../../context/UseTasks'

function TaskList() {
    const {tasks} = useTasks();
  
  return (
    <>
      {
        tasks.map(task => (
          <SingleTask task={task} key={task._id}/>
        ))
      }
    </>
  )
}

export default TaskList