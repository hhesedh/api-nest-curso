import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { userController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [PrismaModule],
  controllers: [userController],
  providers: [UserService],
  exports: [],
})
export class UserModule {}
