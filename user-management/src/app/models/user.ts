type roleType= 'user' | 'admin' 

export interface IUser{
    id?:string,
    fullName:string,
    age:number,
    role:roleType,
    email:string,
    password:string
}

export interface IAuthUser{
    email:string,
    password:string
}

