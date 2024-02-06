import React from 'react'
import { Challenge } from '../../types/challenge.type'
import { useChallenge } from '../../context/UseChallenge';
import {IoCheckmarkDone, IoTrash} from 'react-icons/io5'

interface challengeProps{
    challenge: Challenge
}

function SingleChallenge ({challenge}:challengeProps){
  const {deleteChallenge, updateChallenge}  = useChallenge()
  return (
    <div className='main-content container-wrapper'  key={challenge._id}>
      <div className='item-model'>  
        <div className='item-text'>
            <h2>{challenge.title}</h2>
            <p>{challenge.description}</p>
        </div>
      <div>
            <button 
                  onClick={() => {
                    updateChallenge(challenge._id, {
                      done: !challenge.done
                    })
                  }}
                  className={!challenge.done ? "hecho" : "no-hecho"}
            > <IoCheckmarkDone/></button>
            <button onClick={async () => 
              {if (!window.confirm("Seguro que quieres eliminar el reto personal?"))
              return;
              await deleteChallenge(challenge._id)}}><IoTrash/></button>
        </div>
      </div>  
  </div>
  );
}

export default SingleChallenge