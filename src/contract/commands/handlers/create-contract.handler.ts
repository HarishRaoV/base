import { CommandHandler, EventBus, ICommandHandler } from "@nestjs/cqrs";
import { CreateContractCommand } from "../impl/create-contract.command";
import { NewContractEvent } from "../../events/impl/new-contract.event";
import { VehicleAccountEvent } from "../../events/impl/vehicle-account.event";
import { ShoppingKartEvent } from "../../events/impl/shopping-kart.event";

@CommandHandler(CreateContractCommand)
export class CreateContractHandler implements ICommandHandler<CreateContractCommand> {
    constructor(private readonly eventBus: EventBus) {

    }

    async execute(command: CreateContractCommand): Promise<any> {
        console.log('command', { ...command.req })
        command.req.name = 'secondname'
        this.eventBus.publish(new NewContractEvent(command.req))
        this.eventBus.publish(new VehicleAccountEvent(command.req))
        this.eventBus.publish(new ShoppingKartEvent(command.req))
        return command.req
    }
}