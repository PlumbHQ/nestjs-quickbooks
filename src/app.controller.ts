import { Controller, Get, Res } from '@nestjs/common';
import { NestJsQuickBooksCompanyInfoService } from 'lib/modules/company-info';
import { NestJsQuickBooksAuthorisationError } from 'lib/utils/errors/quick-books-authorisation.error';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly qbCompanyService: NestJsQuickBooksCompanyInfoService,
  ) {}

  @Get()
  async getHello(@Res() res: Response): Promise<any> {
    const result = await this.qbCompanyService
      .read()
      .toPromise()
      .then((x) => {
        return x.CompanyInfo;
      })
      .catch((err) => {
        if (err instanceof NestJsQuickBooksAuthorisationError) {
          return res.redirect('/auth');
        }

        console.log(err);

        throw err;
      });

    return res.send(result);
  }
}
