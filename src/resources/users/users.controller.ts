import { Controller, Get, Param, Post, Body, Query, Delete, Put } from '@nestjs/common';

import { CreateUserDto } from '../../adapter/entry-dto/user.dto';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async loadUsers(
    @Query('pageNumber') pageNumber,
    @Query('type') type 
  ) {
    return await this.usersService.getUsers(type, pageNumber);
  }

  @Get(':userId/snap')
  async loadUserSnap(@Param('userId') id) {
    return await this.usersService.loadUserSnap(id);
  }

  @Get('/groupMembers')
  async getGroupMembers(@Body() groupData: {groupName: string, type: string}) {
    return await this.usersService.getGroupMembers(groupData);
  }

  @Post()
  async addUser(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.addUser(createUserDto);
  }

  @Put(':userId')
  async updateUser(
    @Body() createUserDto: CreateUserDto,
    @Param('userId') id
    ) {
    return await this.usersService.updateUser(id, createUserDto);
  }

  @Delete(':userId')
  async deleteUser(@Param('userId') id) {
    return await this.usersService.deleteUser(id);
  }

}
