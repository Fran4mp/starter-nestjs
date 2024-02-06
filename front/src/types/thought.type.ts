export type Thought = {
    _id: string,
    title: string,
    createdAt?: Date;
    updatedAt?: Date;
}
export type CreateThought = Omit<Thought, '_id' | 'createdAt' | 'updatedAt'>