import React from 'react'
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import TaskPage from './pages/TasksPage'
import NavBar from './components/NavBar'
import ChallengesPage from './pages/ChallengesPage'
import MotivationsPage from './pages/MotivationsPage'

function MainRouter() {
    return (
        <BrowserRouter>
            <NavBar/>
    
            <Routes>
                <Route path= '/' element = {<TaskPage/>}/>
                <Route path= '/tasks' element={<TaskPage/>}/>
                <Route path= 'challenge' element = {<ChallengesPage/>}/>
                <Route path= 'motivation' element = {<MotivationsPage/>}/>
            </Routes>
        </BrowserRouter>
      )
}

export default MainRouter