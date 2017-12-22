namespace beewatch.environment {
    export class Coordinate {
        constructor(readonly latitude: number, readonly longitude: number) {}

        getLatitude(): number {
            return this.latitude;
        }

        getLongitude(): number {
            return this.longitude;
        }
    }
}