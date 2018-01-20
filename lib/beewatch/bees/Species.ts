import { Bee } from './Bee';
import { Subspecies } from './Subspecies';

export class Species implements Bee {
    constructor(readonly subspecies: Subspecies) {
    }
}
