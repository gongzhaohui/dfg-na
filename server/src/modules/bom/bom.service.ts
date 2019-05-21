import { Injectable } from '@nestjs/common';

@Injectable()
export class BomService {
  root(): string {
    return 'Hello World!';
  }
}
