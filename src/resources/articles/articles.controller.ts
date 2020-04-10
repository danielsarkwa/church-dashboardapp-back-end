import { Controller, Get, Param, Delete, Body, Put, Post, Query } from '@nestjs/common';
import { CreateArticleDto } from '../../adapter/entry-dto/article.dto';
import { CreateFolder } from '../../adapter/entry-dto/folder.dto';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) { }

  @Get('accounts')
  async loadAccounts(@Query('pageNumber') pageNumber) {
      return await this.articlesService.getAccounts(pageNumber);
  }

  @Get(':accountId')
  async loadAccount(@Param('accountId') id) {
    return await this.articlesService.getAccountDetails(id);
  }

  @Get()
  async loadAllArticles(@Query('pageNumber') pageNumber) {
    return await this.articlesService.getAllArticles(pageNumber);
  }

  @Get('one/:articleId')
  async loadArticle(@Param('articleId') id, @Query('state') state) {
    return await this.articlesService.getArticle(id, state);
  }

  @Post()
  async addArticle(@Body() CreateArticle: CreateArticleDto) {
    return await this.articlesService.addArticle(CreateArticle);
  }

  @Post('accounts')
  async addAccount(@Body() createAccount: CreateFolder) {
    return await this.articlesService.addAccount(createAccount);
  }

  @Put(':articleId')
  async updateArticle(
    @Param('articleId') id,
    @Body() updateArticle: CreateArticleDto
  ) {
    return await this.articlesService.updateArticle(id, updateArticle);
  }

  @Put('accounts/:accountId')
  async updateAccount(
    @Param('accountId') id,
    @Body() updateAccount: CreateFolder
  ) {
    return await this.articlesService.updateAccount(id, updateAccount, 'add');
  }

  @Delete('accounts/:accountId')
  async deleteAccount(@Param('accountId') id) {
    return await this.articlesService.deleteAccount(id);
  }

  @Delete(':podcastId')
  async deleteArticle(@Param('podcastId') id) {
    return await this.articlesService.deleteArticle(id);
  }
}
