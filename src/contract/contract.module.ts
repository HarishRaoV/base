import { Module } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ContractController } from './contract.controller';
import { CreateContractHandler } from './commands/handlers/create-contract.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { NewContractHandler } from './events/handlers/new-contract.handler';
import { VehicleAccountHandler } from './events/handlers/vehicle-account.handler';
import { ShoppingKartHandler } from './events/handlers/shopping-kart.handler';
import { PurchaseContractSaga } from './sagas/purchase-contract.saga';




@Module({
  imports: [CqrsModule],
  controllers: [ContractController],
  providers: [ContractService,
    CreateContractHandler,
    NewContractHandler, VehicleAccountHandler, ShoppingKartHandler,
    PurchaseContractSaga]
})
export class ContractModule { }
