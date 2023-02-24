import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { NewContractEvent } from "../impl/new-contract.event";

@EventsHandler(NewContractEvent)
export class NewContractHandler implements IEventHandler<NewContractEvent> {
    handle(event: NewContractEvent) {
        event.req.name = 'contractname'
        console.log('New Contract Handler Triggered', event.req)
    }
}