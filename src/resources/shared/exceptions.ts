import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
    constructor(message: string) {
      super(message, HttpStatus.FORBIDDEN);
    }
  }

export class NotFoundException extends HttpException {
    constructor(message: string) {
      super(message, HttpStatus.NOT_FOUND);
    }
  }

export class BadRequestException extends HttpException {
    constructor(message: string) {
      super(message, HttpStatus.BAD_REQUEST);
    }
  }

export class NotAuthorizedException extends HttpException {
    constructor(message: string) {
      super(message, HttpStatus.UNAUTHORIZED);
    }
  }

export class InternalServerErrorException extends HttpException {
    constructor(message: string) {
      super(message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

export class CustomException extends HttpException {
    constructor(message: string, code: HttpStatus) {
      super(message, code);
    }
  }
