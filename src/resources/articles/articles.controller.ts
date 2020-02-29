import { Controller, Get, Param } from '@nestjs/common';

import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) { }

  @Get()
  loadArticlesFolders() {
      return this.articlesService.getFolders();
  }

  @Get(':folderId')
  loadArticlesFolder(@Param('folderId') id) {
    return this.articlesService.getFolderDetails(id);
  }
}
