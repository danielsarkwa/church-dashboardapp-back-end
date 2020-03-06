import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';

import { CreateAdminDto } from '../../data-info/entry-dto/admin.dto';

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

  @Post()
  addUser(@Body() createAmdminDto: CreateAdminDto) {
    return this.adminsService.addAdmin(createAmdminDto);
  }

  @Put()
  updateAdmin(
    @Body()updateAmdminDto: CreateAdminDto,
    @Param('faqId') id) {
    return this.adminsService.updateAdmin(id, updateAmdminDto);
  }
}
