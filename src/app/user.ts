export interface User {
    id: number,
    name: string,
    email: string,
    Mobile: number,
    gender: string,
    dob: Date,
    isActive: boolean,
    range?: any
    userType?: string
}