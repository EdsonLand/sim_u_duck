import {Duck} from "./Duck";
import {Squeak} from "./Squeak";
import {FlyNoWay} from "./FlyNoWay";

export class RubberDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Squeak();
        this.flyBehavior = new FlyNoWay();
    }

    display(): void {
        console.log("I'm a rubber duck");
    }
}