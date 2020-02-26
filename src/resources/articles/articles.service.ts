import { Injectable } from '@nestjs/common';

import { articles } from '../../demo-database/resources(all are tables)/articles-data';

@Injectable()
export class ArticlesService {
    getArticles() {
        return articles;
    }
}
