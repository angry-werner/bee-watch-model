export class Coordinate {
    public constructor(readonly latitude: number, readonly longitude: number) {
    }

    public getLatitude(): number {
        return this.latitude;
    }

    public getLongitude(): number {
        return this.longitude;
    }
}
