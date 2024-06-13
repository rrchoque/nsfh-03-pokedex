import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  executeseed() {
    return `Seed executed`;
  }
}
