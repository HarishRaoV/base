import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { ShoppingKartEvent } from "../impl/shopping-kart.event";

@EventsHandler(ShoppingKartEvent)
export class ShoppingKartHandler implements IEventHandler<ShoppingKartEvent>{
    handle(event: ShoppingKartEvent) {
        event.req.name = 'shoppingkart'
        console.log('Shopping Kart event Triggered', event.req)
    }
}