import { NestJsQuickBooksAuthService } from '../services/auth.service';
import { Request, Response } from 'express';

export class QuickBooksAuthController {
  constructor(private readonly authService: NestJsQuickBooksAuthService) {}

  public authorize(res: Response): void {
    res.redirect(this.authService.getAuthorizeUri());
  }

  public async authorizeCode(req: Request): Promise<void> {
    return this.authService.authorizeCode(req.url);
  }
}
