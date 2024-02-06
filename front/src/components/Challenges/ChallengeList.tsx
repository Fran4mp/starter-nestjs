import React from 'react'
import {useChallenge} from '../../context/UseChallenge'
import SingleChallenge from './SingleChallenge'

function ChallengeList() {
  const {challenges} = useChallenge()
  return (
    <>
      {
        challenges.map(challenge => (
          <SingleChallenge challenge={challenge} key={challenge._id}/>
        ))
      }
    </>
  )
}

export default ChallengeList 