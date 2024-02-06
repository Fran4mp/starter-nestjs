import React from 'react'
import {UseThought} from '../../context/UseThought'
import SingleThought from './SingleThought'


function ThoughList() {
  const {thoughts} = UseThought()
  return (
    <div>
      {
        thoughts.map(thought => (
          <SingleThought thought={thought} key={thought._id}/>
        ))
      }
    </div>
  )
}

export default ThoughList 