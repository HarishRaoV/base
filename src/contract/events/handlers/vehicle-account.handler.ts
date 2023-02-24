import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { VehicleAccountEvent } from "../impl/vehicle-account.event";

@EventsHandler(VehicleAccountEvent)
export class VehicleAccountHandler implements IEventHandler<VehicleAccountEvent>{
    handle(event: VehicleAccountEvent) {
        event.req.name = 'vehiclename'
        console.log('vehicle account handler triggered', event.req)
    }
}