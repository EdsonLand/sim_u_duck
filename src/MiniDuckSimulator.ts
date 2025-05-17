// MiniDuckSimulator.ts
import { MallardDuck } from './MallardDuck';
import { ModelDuck } from './ModelDuck';
import { FlyRocketPowered } from './FlyRocketPowered';
import {RubberDuck} from "./RubberDuck";
import {DecoyDuck} from "./DecoyDuck";
import {RedheadDuck} from "./RedheadDuck";

function runSimulation() {
    console.log('--- Mallard Duck Simulation ---');
    const mallard = new MallardDuck();
    mallard.display();
    mallard.performQuack();
    mallard.performFly();
    mallard.swim();

    console.log('\n--- Redhead Duck Simulation ---');
    const redhead = new RedheadDuck();
    redhead.display();
    redhead.performQuack();
    redhead.performFly();
    redhead.swim();

    console.log('\n--- Rubber Duck Simulation ---');
    const rubberDuck = new RubberDuck();
    rubberDuck.display();
    rubberDuck.performQuack();
    rubberDuck.performFly(); // Should say "I can't fly."
    rubberDuck.swim();

    console.log('\n--- Decoy Duck Simulation ---');
    const decoyDuck = new DecoyDuck();
    decoyDuck.display();
    decoyDuck.performQuack(); // Should say "I can't quack."
    decoyDuck.performFly(); // Should say "I can't fly."
    decoyDuck.swim();

    console.log('\n--- Model Duck Simulation ---');
    const model = new ModelDuck();
    model.display();
    model.performFly(); // Should say "I can't fly."
    model.setFlyBehavior(new FlyRocketPowered());
    model.performFly(); // Should say "I'm flying with a rocket!"
}

runSimulation();
