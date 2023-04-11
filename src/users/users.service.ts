import { Injectable, Logger } from '@nestjs/common';
import { User, UserType } from './users.model';
import { randomUUID } from 'crypto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getAllUsers() {
    return this.users;
  }

  getUserByEmail(email: string): User {
    Logger.log('Finding user ');
    Logger.log(this.users);
    let foundUser;

    this.users.forEach((user) => {
      if (user.email === email) foundUser = user;
    });

    if (foundUser) return foundUser;
    return null;
  }

  createUser(
    name: string,
    email: string,
    age: number,
    userType: UserType,
  ): User {
    if (!(name && email && age)) {
      return null;
    }

    const user = {
      name,
      email,
      age,
      id: randomUUID(),
      role: userType,
    };

    Logger.log('A user has been created', name);
    this.users.push(user);

    return user;
  }

  updateUser(
    email: string,
    name?: string,
    age?: number,
    userType?: UserType,
  ): User {
    const user = this.getUserByEmail(email);

    if (!user) {
      Logger.log('User not found for the given email id');
      return null;
    }

    if (email) {
      user.email = email;
    }

    if (name) {
      user.name = name;
    }

    if (age) {
      user.age = age;
    }

    if (userType) {
      user.role = userType;
    }

    return user;
  }
}
