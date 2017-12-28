/// <reference path="Location.ts" />
namespace beewatch.environment {
    import Colony = beewatch.bees.Colony;

    export interface BeeHive {

    }

    export class Warre implements BeeHive {
        constructor(readonly colony: Colony){}
    }
}