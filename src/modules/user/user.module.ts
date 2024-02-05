import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { UserRepository } from './repository/user.repository';
import { UserController } from './user.controller';
import { CreateUserService } from './services/create-user.service';

import { UserService } from './services/user.service';

@Module({
  controllers: [UserController],
  providers: [PrismaService, UserRepository, CreateUserService, UserService],
})
export class UserModule {}