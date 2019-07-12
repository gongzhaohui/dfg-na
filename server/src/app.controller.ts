import { Get, Controller, Res, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @Render('public/index.html')
  // root(@Res() res) {
  //   res.sendFile(join(__dirname+"../../client/"+"index.html"));
  // }
  root(): string {
    return this.appService.root();
  }
}
