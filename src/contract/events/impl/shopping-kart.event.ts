import { CreateContractInterface } from "../../contract-interface";

export class ShoppingKartEvent {
    constructor(
        public readonly req: CreateContractInterface
    ) { }
}

