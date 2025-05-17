import {IFlyBehavior} from "./IFlyBehavior";

export class FlyNoWay implements IFlyBehavior {
    fly(): void {
        console.log("I can't fly!");
    }
}