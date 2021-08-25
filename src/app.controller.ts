import { Controller, Get, Res } from '@nestjs/common';
import { QuickBooksCompanyInfoService } from 'lib/modules/company-info';
import { QuickBooksAuthorisationError } from 'lib/utils/errors/quick-books-authorisation.error';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly qbCompanyService: QuickBooksCompanyInfoService,
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
        if (err instanceof QuickBooksAuthorisationError) {
          return res.redirect('/auth');
        }

        throw err;
      });

    return res.send(result);
  }
}
