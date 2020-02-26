import { Controller, Get } from '@nestjs/common';

import { SermonsService } from './sermons.service';

@Controller('sermons')
export class SermonsController {
  constructor(private sermonsService: SermonsService) { }

  @Get()
  loadSermons() {
      return this.sermonsService.getSermons();
  }
}
