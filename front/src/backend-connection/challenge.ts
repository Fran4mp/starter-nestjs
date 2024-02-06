import { CreateChallenge, UpdateChallenge } from "../types/challenge.type";


export const createChallengeRequest = (challenge: CreateChallenge) => 
    fetch (`http://localhost:3000/api/challenges`,{
        method: 'POST',
        body: JSON.stringify(challenge),
        headers: {
            'Content-Type': 'application/json'
        }
    })

export const getChallengeRequest = () => fetch(`http://localhost:3000/api/challenges`)

export const deleteChallengeRequest = (id: string) => 
    fetch(`http://localhost:3000/api/challenges/${id}`,
    {method: "DELETE",}); 

export const updateChallengeRequest = (id: string, challenge: UpdateChallenge ) => 
    fetch(`http://localhost:3000/api/challenges/${id}`,
        {method: "PUT",
        body: JSON.stringify(challenge),
        headers: {
            "Content-Type": "application/json",
        }
    });