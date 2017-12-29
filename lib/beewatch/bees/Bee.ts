import { Subspecies } from './Subspecies';

export interface Bee {
    readonly subspecies: Subspecies;
}

export class Species implements Bee {
    constructor(readonly subspecies: Subspecies) {
    }
}

export class Worker extends Species {
}

export class Drone extends Species {
}

export class Queen extends Species {
}
