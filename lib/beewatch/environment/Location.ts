import { BeeHive } from './BeeHive';
import { Coordinate } from './Coordinate';

export class Location {
    private readonly beeHives: Set<BeeHive> = new Set();

    public constructor(private readonly name: string,
                       private readonly coordinate: Coordinate,
                       private readonly description: string) {
    }

    public getName(): string {
        return this.name;
    }

    public getCoordinate(): Coordinate {
        return this.coordinate;
    }

    public getdescription(): string {
        return this.description;
    }

    public getBeeHives(): Set<BeeHive> {
        return this.beeHives;
    }

    public addBeeHive(beeHive: BeeHive) {
        this.beeHives.add(beeHive);
    }

    public removeBeeHive(beeHive: BeeHive) {
        this.beeHives.delete(beeHive);
    }
}
