import { Module } from '@nestjs/common';
import { HeroesGameModule } from './heroes/heroes.module';
import { ContractModule } from './contract/contract.module';

@Module({
  imports: [HeroesGameModule, ContractModule],
})
export class ApplicationModule {}
