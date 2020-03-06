import { Controller, Get, Param, Delete, Body, Put, Post } from '@nestjs/common';

import { CreateArticleDto } from '../../data-info/entry-dto/article.dto';

import { CreateFolder } from '../../data-info/entry-dto/folder.dto';

import { ArticlesService } from './articles.service';
import { CreateSermonDto } from 'src/data-info/entry-dto/sermon.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) { }

  @Get()
  loadArticlesFolders() {
      return this.articlesService.getFolders();
  }

  @Get(':folderId')
  loadArticlesFolder(@Param('folderId') id) {
    return this.articlesService.getFolderDetails(id);
  }

  @Get('one/:articleId')
  loadSermon(@Param('articleId') id) {
    return this.articlesService.getArticle(id);
  }

  @Post()
  addArticle(@Body() createSermonDto: CreateArticleDto) {
    return this.articlesService.addArticle(createSermonDto);
  }

  @Post('folders')
  addFolder(@Body() createSermonFolder: CreateFolder) {
    return this.articlesService.addFolder(createSermonFolder);
  }

  @Put(':id')
  updateArticle(
    @Param('id') id,
    @Body() updateArticleDto: CreateArticleDto
  ) {
    return this.articlesService.updateArticle(id, updateArticleDto);
  }

  @Put('folders/:folderId')
  updateFolder(
    @Param('id') id,
    @Body() updateFolderDto: CreateFolder
  ) {
    return this.articlesService.updateFolder(id, updateFolderDto);
  }

  @Delete('folders/:folderId')
  deletePodcastFolder(@Param('folderId') id) {
    return this.articlesService.deleteArticleFolder(id);
  }

  @Delete(':id')
  deleteArticle(@Param('sermonId') id) {
    return this.articlesService.deleteArticle(id);
  }

}
