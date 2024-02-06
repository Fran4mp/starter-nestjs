import {createContext, useState, useEffect} from 'react'
import { getThoughtRequest, createThoughtRequest, deleteThoughtRequest } from '../backend-connection/thought'
import { CreateThought, Thought } from '../types/thought.type'

type ThoughtContextType = {
    thoughts: Thought[]
    createThought: (thought: CreateThought) => Promise<void>;
    deleteThought: (id: string) => Promise<void>;
}

export const ThoughtContext = createContext<ThoughtContextType>({
    thoughts: [],
    createThought: async () => {},
    deleteThought: async () => {},
})

type ThoughtProps = {
    children: React.ReactNode;
}

export const ToughtProvider: React.FC<ThoughtProps> = ({children}) => {
    
    const [thoughts, setThoughts] = useState<Thought[]>([]);

    useEffect(()=> {
        getThoughtRequest()
            .then((thoughtResponse) => thoughtResponse.json())
            .then((data) => setThoughts(data))
    },[]);

    const  createThought = async (thought: CreateThought) => {
        const result = await createThoughtRequest(thought)
        const data = await result.json()
        if(!data.title) return;
            else setThoughts([...thoughts, data]);
        
    }
    const deleteThought = async(id:string) => {
        const res = await deleteThoughtRequest(id);
        if (res.status === 204){
            setThoughts(thoughts.filter(thought => thought._id !== id))
        };
    }

    return (
        <ThoughtContext.Provider value={{
            thoughts,
            createThought,
            deleteThought,
            }}>
            {children}
        </ThoughtContext.Provider>
    )
}