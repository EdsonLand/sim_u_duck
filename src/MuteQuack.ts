import {IQuackBehavior} from "./IQuackBehavior";

export class MuteQuack implements IQuackBehavior{
    quack(): void {
        console.log("<< Silence >>");
    }
}