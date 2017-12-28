namespace beewatch.environment {
    export class Location {
        constructor(
            readonly name: string,
            readonly coordinate: Coordinate,
            readonly description: string) {}

        getName(): string {
            return this.name;
        }

        getCoordinate(): Coordinate {
            return this.coordinate;
        }

        getDescription(): string {
            return this.description;
        }
    }
}