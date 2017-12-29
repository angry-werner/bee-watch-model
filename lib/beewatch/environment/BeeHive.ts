import { Colony } from '../bees/Colony';

export interface BeeHive {
    readonly colony: Colony;
}

export class Warre implements BeeHive {
    public constructor(readonly colony: Colony) {
    }
}