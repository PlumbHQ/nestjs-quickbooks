import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import {
  NestJsQuickBooksCompanyInfoService,
  NestJsQuickBooksAuthorisationError,
} from 'lib';

@Controller()
export class AppController {
  constructor(
    private readonly qbCompanyService: NestJsQuickBooksCompanyInfoService,
  ) {}

  @Get()
  async getHello(@Res() res: Response): Promise<any> {
    const result = await this.qbCompanyService
      .read()
      .then((x) => {
        return x.CompanyInfo;
      })
      .catch((err) => {
        if (err instanceof NestJsQuickBooksAuthorisationError) {
          return res.redirect('/auth');
        }

        throw err;
      });

    return res.send(result);
  }
}
