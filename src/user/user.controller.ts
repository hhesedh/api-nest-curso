import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class userController {
  @Post()
  async create(@Body() body) {
    return { body };
  }
}
