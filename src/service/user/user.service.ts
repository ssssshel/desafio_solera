import { Injectable } from '@nestjs/common';
import { ServiceDto } from 'src/utils/dtos/dtos';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/model/user.model';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User)
    private userModel: typeof User
  ) { }

  async getFullname(username: string, password: string): Promise<ServiceDto> {

    try {
      const user = await this.userModel.findOne({
        where: {
          username: username,
        }
      })

      if (!user) {
        return {
          error: true,
          message: 'User not found',
          httpStatus: 404
        }
      }

      const userPassword = user.dataValues.password
      const isPasswordValid = await bcrypt.compare(String(password), userPassword)

      if (!isPasswordValid) {
        return {
          error: true,
          message: 'Wrong password',
          httpStatus: 401
        }
      }

      return {
        data: {
          fullname: user.fullname
        },
        error: false
      }
    } catch (error) {
      throw error
    }


  }
}
