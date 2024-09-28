export interface IUser {
    id: number;
    name: string;
    role: string;
    email?: string;
}
export const USERS: IUser[] = [
    {
        id: 1011,
        name: "Vlad Tm",
        email: "super@ukr.net",
        role: "Admin"
    },
    {
        id: 3433,
        name: "Nazar Lub",
        email: "gigig@ukr.net",
        role: "Manager"
    },
    {
        id: 1299,
        name: "Olga Fed",
        email: "ffgg@ukr.net",
        role: "User"
    },
    {
        id: 3488,
        name: "Olga Fed",
        email: "ffgg@ukr.net",
        role: "Admin"
    }
]