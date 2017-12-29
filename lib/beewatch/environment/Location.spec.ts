import { Location } from './Location';
import { Coordinate } from './Coordinate';
import { BeeHive } from './BeeHive';
import { Colony } from '../bees/Colony';

describe('Test the Location class (actually the set holding the beehives)', function () {
    let location: Location;


    beforeEach(function() {
        location = new Location('Krienser Egg', new Coordinate(0, 0), 'My first location.');
    });

    it('the new object has no beehives', function () {
        expect(location.getBeeHives().size).toBe(0);
    });

    it('when we add a beehive, we get also back a beehive', function() {
        const beeHive: BeeHive = new Hive();
        location.addBeeHive(beeHive);
        expect(location.getBeeHives().has(beeHive) && location.getBeeHives().size == 1).toBe(true);
    });

    it('when we add a beehive, we can remove it later again', function() {
        const beeHive: BeeHive = new Hive();
        location.addBeeHive(beeHive);
        location.removeBeeHive(beeHive);
        expect(location.getBeeHives().size).toBe(0);
    });

    class Hive implements BeeHive {
        readonly colony: Colony;
    }
});

