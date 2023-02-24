import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateContractCommand } from './commands/impl/create-contract.command';
import { CreateContractInterface } from './contract-interface';

@Injectable()
export class ContractService {
    constructor(private readonly commandBus: CommandBus) { }

    async purchaseContractService(request: CreateContractInterface) {
        return this.commandBus.execute(new CreateContractCommand(request))
    }
}


