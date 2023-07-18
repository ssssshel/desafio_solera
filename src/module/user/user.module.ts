import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize"
import { UserController } from 'src/controller/user/user.controller';
import { User } from 'src/model/user.model';
import { UserService } from 'src/service/user/user.service';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  // providers: [UserService],
  exports: [SequelizeModule]
  // controllers: [UserController]
})
export class UserModule { }
