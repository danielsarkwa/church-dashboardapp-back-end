import { Injectable } from '@nestjs/common';

import { sermons } from '../../demo-database/sermons-data';

@Injectable()
export class SermonsService {
    getSermons() {
        return sermons;
    }
}
