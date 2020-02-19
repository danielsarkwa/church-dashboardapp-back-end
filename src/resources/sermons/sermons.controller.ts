import { Controller, Get } from '@nestjs/common';

@Controller('sermons')
export class SermonsController {
    @Get()
    loadSermons() {
        return 'get all sermons...';
    }
}
