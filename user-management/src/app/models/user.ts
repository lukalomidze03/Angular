type roletype= 'user' | 'admin' 
export interface IUser{
    id?:string,
    fullName:string,
    age:number,
    role:roletype,
    email:string, 
    password:string,
}