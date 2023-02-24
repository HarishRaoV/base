import { CreateContractInterface } from "../../contract-interface";

export class CreateContractCommand {
    constructor(
        public readonly req: CreateContractInterface,
    ) { }
}
