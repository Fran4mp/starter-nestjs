import { createContext, useState, useEffect } from "react";
import { getChallengeRequest, createChallengeRequest, updateChallengeRequest,deleteChallengeRequest } from "../backend-connection/challenge";
import { CreateChallenge, Challenge, UpdateChallenge } from "../types/challenge.type";

type ChallengeContextType = {
    challenges: Challenge[]
    createChallenge: (task: CreateChallenge) => Promise<void>;
    deleteChallenge: (id: string) => Promise<void>;
    updateChallenge: (id:string, task:UpdateChallenge) => Promise<void>;
}

export const ChallengeContext = createContext<ChallengeContextType>({
    challenges: [],
    createChallenge: async () => {},
    deleteChallenge: async () => {},
    updateChallenge: async () => {},
})

type ChallengeProps = {
    children: React.ReactNode;
}

export const ChallengeProvider: React.FC<ChallengeProps> = ({children}) => {
    
    const [challenges, setChallenges] = useState<Challenge[]>([]);

    useEffect(()=> {
        getChallengeRequest()
            .then((challengeResponse) => challengeResponse.json())
            .then((data) => setChallenges(data))
    },[]);

    const  createChallenge = async (challenge: CreateChallenge) => {
        const res = await createChallengeRequest(challenge)
        const data = await res.json()
        if(!data.title) return;
            else setChallenges([...challenges, data]);
        
    }
    const deleteChallenge = async(id:string) => {
        const res = await deleteChallengeRequest(id);
        if (res.status === 204){
            setChallenges(challenges.filter(challenge => challenge._id !== id))
        };
    }
    const updateChallenge = async (id: string, challenge: UpdateChallenge) => {
       const res = await updateChallengeRequest(id, challenge);
       const data = await res.json();
       setChallenges(
        challenges.map(challenge => challenge._id === id ? {...challenge, ...data}: challenge)
       );
    }

    return (
        <ChallengeContext.Provider value={{
            challenges,
            createChallenge,
            deleteChallenge,
            updateChallenge
            }}>
            {children}
        </ChallengeContext.Provider>
    )
}
