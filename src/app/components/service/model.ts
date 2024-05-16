export interface Model<T> {
  data: T
}

export interface Data {
  message: string;
}

export interface UserAuth{
  token: string;
  user: User;
  status: boolean;
}
export interface User{
  id:number;
  nom:string;
  prenom:string;
  adresse:string;
  email:string;
  password:string;
  telephone:number;
  role:string;
}
