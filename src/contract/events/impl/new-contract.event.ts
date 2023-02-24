import { CreateContractInterface } from "../../contract-interface";

export class NewContractEvent {
    constructor(
        public readonly req: CreateContractInterface,
    ) { }
}
