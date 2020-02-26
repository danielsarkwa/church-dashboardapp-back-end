import { Injectable } from '@nestjs/common';

import { articles } from '../../demo-database/articles-data';

@Injectable()
export class ArticlesService {
    getArticles() {
        return articles;
    }
}
