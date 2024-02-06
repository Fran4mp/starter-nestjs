import React from 'react'
import { Thought } from '../../types/thought.type'
import { UseThought } from '../../context/UseThought';
import { IoTrash } from 'react-icons/io5'

interface thoughtProps{
    thought: Thought
}

function SingleThought ({thought}:thoughtProps){
  const {deleteThought}  = UseThought()
  return (
    <div className='main-content container-wrapper' key={thought._id}>
      <div className='item-model'>  
        <div className='item-text'>
            <p>{thought.title}</p>
        </div>
      <div>
        <button onClick={async () => 
            {if (!window.confirm("Seguro que quieres eliminar el pensamiento motivacional?"))
            return;
            await deleteThought(thought._id)}}><IoTrash/></button>
        </div>
      </div>  
  </div>
  );
}

export default SingleThought