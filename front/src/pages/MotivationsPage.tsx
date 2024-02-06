import React from 'react'
import ThoughtForm from '../components/thoughts/ThoughtForm'
import ThoughList from '../components/thoughts/ThoughtList'
import { ToughtProvider } from '../context/ThoughtContext'


function MotivationsPage() {
  return (
    <div>
      <ToughtProvider>
        <ThoughtForm/>
        <ThoughList/>
      </ToughtProvider>
    </div>
  )
}

export default MotivationsPage