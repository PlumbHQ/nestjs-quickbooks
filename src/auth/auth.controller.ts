import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { NestJsQuickBooksAuthService } from 'lib/modules/auth/services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly qbAuthService: NestJsQuickBooksAuthService) {}

  @Get()
  public authorize(@Res() res: Response): void {
    res.redirect(this.qbAuthService.getAuthorizeUri());
  }

  @Get('disconnect')
  public async disconnect(@Res() res: Response): Promise<any> {
    await this.qbAuthService.disconnect();
    res.redirect('/');
  }

  @Get('callback')
  public async authorizeCode(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    try {
      await this.qbAuthService.authorizeCode(req.url);
      console.log('callback');
      return res.redirect('/');
    } catch (e) {
      console.error(e);
    }
  }
}
