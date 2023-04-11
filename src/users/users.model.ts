export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  password?: string;
  role: UserType;
}

export enum UserType {
  ADMIN = 'admin',
  USER = 'user',
}
