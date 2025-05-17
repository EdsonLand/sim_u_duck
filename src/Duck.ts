import {IFlyBehavior} from "./IFlyBehavior";
import {IQuackBehavior} from "./IQuackBehavior";

export abstract class Duck {
    protected flyBehavior!: IFlyBehavior;
    protected quackBehavior!: IQuackBehavior;

    abstract display(): void;

    performFly(): void {
        this.flyBehavior.fly();
    }

    performQuack(): void {
        this.quackBehavior.quack();
    }

    swim(): void {
        console.log("All ducks float, even decoys!");
    }

    setFlyBehavior(fb: IFlyBehavior): void {
        this.flyBehavior = fb;
    }

    setQuackBehavior(qb: IQuackBehavior): void {
        this.quackBehavior = qb;
    }
}