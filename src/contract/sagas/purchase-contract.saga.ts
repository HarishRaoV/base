import { ICommand, Saga, ofType } from "@nestjs/cqrs";
import { Observable, map } from "rxjs";
import { NewContractEvent } from "../events/impl/new-contract.event";
import * as clc from 'cli-color';
import { Injectable } from "@nestjs/common";
import { VehicleAccountEvent } from "../events/impl/vehicle-account.event";
import { ShoppingKartEvent } from "../events/impl/shopping-kart.event";

@Injectable()
export class PurchaseContractSaga {
    @Saga()
    purchaseContract = (events$: Observable<any>): Observable<ICommand> => {
        return events$
            .pipe(
                ofType(NewContractEvent),
                ofType(VehicleAccountEvent),
                ofType(ShoppingKartEvent),
                // delay(1000),
                map(event => {
                    console.log(clc.redBright('Inside [NewContractEvent] Saga'));
                    return null
                }),

            );
    }
}
