import { Body, Controller, Post } from '@nestjs/common';
import { ContractService } from './contract.service';
import { CreateContractInterface } from './contract-interface';

@Controller('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) { }

  @Post('purchaseContract')
  async purchaseContract(@Body() request:CreateContractInterface) {
    return await this.contractService.purchaseContractService(request)
  }
}
