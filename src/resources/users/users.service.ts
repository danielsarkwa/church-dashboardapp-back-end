import { Injectable } from '@nestjs/common';

import { users, userDetails } from '../../demo-database/resources(all are tables)/users-data';

@Injectable()
export class UsersService {
  getUsers() {
      return users;
  }

  getUserDetails(id) {
      return userDetails;
  }

  addUser(data) {
    return ['user added succssfully', data]
  }
}