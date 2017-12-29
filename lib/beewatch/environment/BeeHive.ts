/// <reference path="Location.ts" />
namespace beewatch.environment {
    import Colony = beewatch.bees.Colony;

    export interface BeeHive {
        readonly colony: Colony;
    }

    export class Warre implements BeeHive {
        constructor(readonly colony: Colony){}
    }
}