import { useContext } from "react";
import {ThoughtContext} from './ThoughtContext'


export const UseThought = () => {
    const context = useContext (ThoughtContext)
    
    return context
}