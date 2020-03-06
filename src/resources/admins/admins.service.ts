import { Injectable } from '@nestjs/common';

import { admins, adminDetails } from '../../demo-database/resources(all are tables)/admins-data';

@Injectable()
export class AdminsService { 
  getAdmins() {
      return admins;
  }

  getAdminDetails(id) {
      return adminDetails;
  }

  addAdmin(data) {
    return ['successfully added admin', data];
  }

  updateAdmin(id, data) {
    return ['successfully updated admin', data];
  }
}