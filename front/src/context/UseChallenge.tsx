import { useContext } from "react";
import {ChallengeContext} from './ChallengeContext'


export const useChallenge = () => {
    const context = useContext (ChallengeContext)
    
    return context
}