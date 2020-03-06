import { Controller, Get, Param } from '@nestjs/common';

import { AdminsService } from './admins.service';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) { }
  
  @Get()
  loadAdmins() {
    return this.adminsService.getAdmins();
  }

  @Get(':adminId/details')
  loadAdminDetails(@Param('adminId') id) {
    return this.adminsService.getAdminDetails(id);
  }
}
