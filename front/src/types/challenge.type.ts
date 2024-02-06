export type Challenge = {
    _id: string
    title: string,
    description?: string,
    done?: boolean
    createdAt?: Date;
    updatedAt?: Date;
}
export type CreateChallenge = Omit<Challenge, '_id' | 'createdAt' | 'updatedAt'>

export type UpdateChallenge = Partial<CreateChallenge>;