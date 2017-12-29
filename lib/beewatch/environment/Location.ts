namespace beewatch.environment {
    export class Location {
        private readonly beeHives: Set<BeeHive> = new Set();

        constructor(
            private readonly name: string,
            private readonly coordinate: Coordinate,
            private readonly description: string) {
        }

        getName(): string {
            return this.name;
        }

        getCoordinate(): Coordinate {
            return this.coordinate;
        }

        getdescription(): string {
            return this.description;
        }

        getBeeHives(): Set<BeeHive> {
            return this.beeHives;
        }

        addBeeHive(beeHive: BeeHive) {
            this.beeHives.add(beeHive);
        }

        removeBeeHive(beeHive: BeeHive) {
            this.beeHives.delete(beeHive);
        }
    }
}