import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { 
    NotFoundException,
    BadRequestException,
    CustomException,
    InternalServerErrorException
} from '../shared/exceptions';

import * as mongoose from 'mongoose';
import * as _lodash from 'lodash';

import { User } from './schema/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) { }

  async getUsers(type, pageNumber) {
    try {
      const perPage = 10;
      const page = pageNumber ? pageNumber : 1;
      if (type == 'users') {
        const users = await this.userModel
          .find({}).skip((perPage * page) - perPage).limit(perPage);
        if (users.length > 0) {
          return {
            results: users
          };
        } else {
            throw new NotFoundException('Users not found');
        }
      } else {
        const admins = await this.userModel
          .find({'type':'admin'}).skip((perPage * page) - perPage).limit(perPage);
        if (admins.length > 0) {
          return admins;
        } else {
            throw new NotFoundException('Admins not found');
        }
      }
    } catch(ex) {
        if(ex.message) {
            throw new NotFoundException(ex.message);
        } else {
            throw new BadRequestException('Could not retrieve data');
        };
    }
  }

  async getGroupMembers(groupData) {
    try {
      const posMembers = await this.userModel.find({'type': groupData.type});
      if (posMembers.length > 0) {
        const groupMembers = [];
        for(const member of posMembers) {
          if(member.role.groups.indexOf(groupData.groupName) > -1) {
            groupMembers.push(member._id);
          }
        }
        return groupMembers;
      } else {
        throw new NotFoundException('no users found');
      }
    } catch(ex) {
      if(ex.message) {
        throw new NotFoundException(ex.message);
      } else {
          throw new BadRequestException('Could not retrieve data');
      };
    }
  }

  async getUserDetails(userId) {
    try {
      if(!mongoose.Types.ObjectId.isValid(userId)) {
        throw new BadRequestException('Invalid user Id');
      };
      const userDetails = await this.userModel.findById(userId);
      if (userDetails) {
        return userDetails;
      } else {
        throw new NotFoundException('User not found');
      }
    } catch(ex) {
      if(ex.message) {
        throw new NotFoundException(ex.message);
      } else {
          throw new BadRequestException('Could not retrieve data');
      };
    }
  }

  async loadUserSnap(id) {
    try {
      const userSnap = await this.userModel.findById(id);
      if(userSnap) {
        const snapData = _lodash.pick(userSnap, ['_id', 'avatarUrl', 'userName']);
        return snapData;
      } else {
        throw new NotFoundException('User not found');
      }
    } catch(ex) {
      if (ex.message) {
        throw new BadRequestException(ex.message);
      } else {
          console.log(ex.message);
          throw new BadRequestException('Could not create new user');
      }
    }
  }

  // @TO-DO: hash users password -- think of third party services
  async addUser(data) {
    try {
      let newUser = await this.userModel.findOne({ 'email': data.email });
      if(newUser) {
          throw new BadRequestException('User already exit');
      } else {
          newUser = await new this.userModel(data);
          await newUser.save();
          return 'User created successfully';
      };
    } catch(ex) {
        if (ex.message) {
            throw new BadRequestException(ex.message);
        } else {
            console.log(ex.message);
            throw new BadRequestException('Could not create new user');
        }
    }
  }

  async updateUser(userId, data) {
    try {
      if(!mongoose.Types.ObjectId.isValid(userId)) {
          throw new BadRequestException('Invalid user Id');
      };
      const toUpdate = await this.userModel.findById(userId);
      if (toUpdate) {
          const possibleUpdates = _lodash.pick(data, ['type', 'role']);
          for(const item in possibleUpdates) {
            toUpdate[item] = possibleUpdates[item];
          }
          await toUpdate.save();
          return 'User updated successfully';
        } else {
            throw new NotFoundException('User not found');
        }
    } catch(ex) {
        if (ex.message) {
            throw new CustomException(ex.message, ex.status);
        } else {
            throw new BadRequestException('Could not update user');
        }
    }
  }

  async deleteUser(userId) {
    try {
      if(!mongoose.Types.ObjectId.isValid(userId)) {
          throw new BadRequestException('Invalid user Id');
      };
      const toDelete = await this.userModel.findById(userId);
      if(toDelete) {
          await toDelete.remove();
          return 'User deleted successfully';
      } else {
          throw new InternalServerErrorException('User not found');
      }
    } catch (ex) {
        if (ex.message) {
            throw new CustomException(ex.message, ex.status);
        } else {
            throw new BadRequestException('Could not delete user');
        }
      }
  }
  
}