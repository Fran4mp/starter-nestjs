import {CreateThought} from '../types/thought.type'

export const createThoughtRequest = (thought: CreateThought) => 
    fetch (`http://localhost:3000/api/thoughts`,{
        method: 'POST',
        body: JSON.stringify(thought),
        headers: {
            'Content-Type': 'application/json'
        }
    })

export const getThoughtRequest = () => fetch(`http://localhost:3000/api/thoughts`)

export const deleteThoughtRequest = (id: string) => 
    fetch(`http://localhost:3000/api/thoughts/${id}`,
    {method: "DELETE",}); 
