import React from 'react'
import ChallengeList from '../components/Challenges/ChallengeList'
import ChallengeForm from '../components/Challenges/ChallengeForm'
import { ChallengeProvider } from '../context/ChallengeContext'

function ChallengesPage() {
  return (
    <div>
      <ChallengeProvider>
        <ChallengeForm/>
        <ChallengeList/>
      </ChallengeProvider>
      
    </div>
  )
}

export default ChallengesPage