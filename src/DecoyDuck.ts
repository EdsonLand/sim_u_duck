import {Duck} from "./Duck";
import {FlyNoWay} from "./FlyNoWay";
import {MuteQuack} from "./MuteQuack";

export class DecoyDuck extends Duck {
    constructor() {
        super();
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new MuteQuack();
    }

    display(): void {
        console.log("I'm a decoy duck");
    }
}