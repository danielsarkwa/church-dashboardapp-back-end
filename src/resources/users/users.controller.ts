import { Controller, Get, Param, Post, Body } from '@nestjs/common';

import { CreateUserDto } from '../../data-info/entry-dto/user.dto';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  loadUsers() {
    return this.usersService.getUsers();
  }

  @Get(':userId/details')
  loadUserDetails(@Param('userId') id) {
    return this.usersService.getUserDetails(id);
  }

  @Post()
  addUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.addUser(createUserDto);
  }
}
