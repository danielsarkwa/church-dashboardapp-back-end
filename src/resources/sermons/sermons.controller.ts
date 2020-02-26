import { Controller, Get, Param } from '@nestjs/common';

import { SermonsService } from './sermons.service';

@Controller('sermons')
export class SermonsController {
  constructor(private sermonsService: SermonsService) { }

  @Get()
  loadSermonFolders() {
      return this.sermonsService.getFolders();
  }

  @Get(':folderId')
  loadSermons(@Param('folderId') id) {
    return this.sermonsService.getFolderDetails(id);
  }   
}
