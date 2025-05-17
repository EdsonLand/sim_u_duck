import {Duck} from "./Duck";
import {Quack} from "./Quack";
import {FlyRocketPowered} from "./FlyRocketPowered";

export class ModelDuck extends Duck {
    constructor() {
        super();
        this.flyBehavior = new FlyRocketPowered();
        this.quackBehavior = new Quack();
    }

    display(): void {
        console.log("I'm a model duck");
    }
}