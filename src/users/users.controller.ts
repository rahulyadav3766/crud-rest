import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User, UserType } from './users.model';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/')
  getAllUsers(): User[] {
    return this.userService.getAllUsers();
  }

  @Get('/:email')
  getUserByEmail(@Param('email') email: string): User {
    Logger.log('recevied get request', email);
    return this.userService.getUserByEmail(email);
  }

  @Post()
  createUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('age') age: number,
    @Body('userType') userType: UserType,
  ) {
    return this.userService.createUser(name, email, age, userType);
  }

  @Put()
  updateUser(
    @Body('email') email: string,
    @Body('name') name?: string,
    @Body('age') age?: number,
    @Body('userType') userType?: UserType,
  ) {
    return this.userService.updateUser(email, name, age, userType);
  }
}
