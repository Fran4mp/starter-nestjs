import React from 'react'
import TaskForm from '../components/tasks/TaskForm'
import TaskList from '../components/tasks/TaskList'
import { TaskProvider } from '../context/TaskContext'

function TasksPage() {
  return (
    <div>
    <TaskProvider>
        <TaskForm/>
        <TaskList/>
    </TaskProvider></div>
  )
}

export default TasksPage