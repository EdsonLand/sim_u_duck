import {Duck} from "./Duck";
import {Quack} from "./Quack";
import {FlyWithWings} from "./FlyWithWings";

export class RedheadDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }

    display(): void {
        console.log("I'm a real Redhead Duck");
    }
}