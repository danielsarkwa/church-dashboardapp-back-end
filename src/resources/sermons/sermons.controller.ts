import { Controller, Get, Param, Post } from '@nestjs/common';

import { SermonsService } from './sermons.service';

@Controller('sermons')
export class SermonsController {
  constructor(private sermonsService: SermonsService) { }

  @Get()
  loadSermonFolders() {
      return this.sermonsService.getFolders();
  }

  @Get(':folderId')
  loadSermonsFolder(@Param('folderId') id) {
    return this.sermonsService.getFolderDetails(id);
  }

  @Get('one/:sermonId')
  loadSermon(@Param('sermonId') id) {
    return this.sermonsService.getSermon(id);
  }

  @Post()
  addSermon() { // work on later
    return this.sermonsService.addSermon('data');
  }

}
