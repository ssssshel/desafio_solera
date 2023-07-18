import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from "@nestjs/sequelize"
import { dbCredentials } from './config/constants/constants';
import { User } from './model/user.model';
import { UserController } from './controller/user/user.controller';
import { UserService } from './service/user/user.service';
import { UserModule } from './module/user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    SequelizeModule.forRoot({
      database: dbCredentials.database,
      username: dbCredentials.username,
      password: dbCredentials.password,
      host: dbCredentials.host,
      port: dbCredentials.port,
      dialect: 'mysql',
      logging: console.log,
      models: [User]
    }),
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    })
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule { }
