import {Duck} from "./Duck";
import {Quack} from "./Quack";
import {FlyNoWay} from "./FlyNoWay";

export class MallardDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyNoWay();
    }

    display(): void {
        console.log("I'm a real Mallar Duck");
    }
}