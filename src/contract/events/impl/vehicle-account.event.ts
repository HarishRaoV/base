import { CreateContractInterface } from "../../contract-interface";

export class VehicleAccountEvent {
    constructor(
        public readonly req: CreateContractInterface,
    ) { }
}
