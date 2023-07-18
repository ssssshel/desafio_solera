import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from 'src/service/user/user.service';
import { HTTPControllerDto } from 'src/utils/dtos/dtos';

@Controller({
  path: 'api/v1/user',
})
export class UserController {

  constructor(
    private readonly userService: UserService
  ) { }

  @Get('/fullname')
  async getFullname(@Query('username') username: string, @Query('password') password: string, @Res() res: Response): Promise<Response<HTTPControllerDto>> {
    if (!username || !password) {
      return res.status(400).json(
        {
          status: 400,
          message: 'Bad Request',
          details: 'Missing username or password',
          error: true
        }
      )
    }

    try {
      const response = await this.userService.getFullname(username, password)

      if (response.error) {
        return res.status(response.httpStatus).json({
          status: response.httpStatus || 500,
          message: response.message || 'Internal Server Error',
          error: true
        })
      }

      return res.status(200).json(
        {
          status: 200,
          message: 'Success',
          details: 'Successfully get fullname',
          data: response.data,
        }
      )
    } catch (error) {
      return res.status(500).json(
        {
          status: 500,
          message: 'Internal Server Error',
          details: error.message,
          error: true
        }
      )
    }
  }
}
