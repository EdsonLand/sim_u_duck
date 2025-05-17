import {IFlyBehavior} from "./IFlyBehavior";

export  class FlyRocketPowered implements IFlyBehavior {
    fly(): void {
        console.log("I'm flying with a rocket!");
    }
}