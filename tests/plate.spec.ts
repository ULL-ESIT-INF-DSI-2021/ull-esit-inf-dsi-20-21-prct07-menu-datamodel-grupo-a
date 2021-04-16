import 'mocha';
import { expect } from 'chai';
import { Fruit } from '../src/fruit';
import { DairyProduct } from '../src/dairyProduct';
import { Vegetables } from '../src/vegetables';
import { Plate } from '../src/plate';

const apple = new Fruit('apple', { country: 'Spain', city: 'Granada' },
  { carbs: 12, lipids: 0.17, proteins: 0.3 }, 50, 53, 1.65);

const cheese = new DairyProduct('manchego cheese',
  { country: 'Spain', city: 'La Mancha' },
  { carbs: 0.42, lipids: 33.54, proteins: 26.01 }, 50, 408, 34.90);

const spinach = new Vegetables('spinach',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 3.63, lipids: 0.39, proteins: 2.89 }, 50, 23, 1.19);

const arugula = new Vegetables('arugula',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 3.65, lipids: 0.66, proteins: 2.58 }, 50, 25, 1.49);

const plateInstance = new Plate('manchego salad',
  [apple, cheese, spinach, arugula], 'first');

describe('Plate class methods tested with a plate class instance', () => {
  describe('Getters', () => {
    it('getName() should return manchego salad', () => {
      expect(plateInstance.getName()).to.equal('manchego salad');
    });
    it('getKcal() should return 254.5', () => {
      expect(plateInstance.getKcal()).to.equal(254.5);
    });
    it('getTotalPrice() should return 1.9615',
      () => {
        expect(plateInstance.getTotalPrice()).to
          .equal(1.9615);
      });
    it('getMainGroup() should return vegetables', () => {
      expect(plateInstance.getMainGroup()).to.equal('Vegetables');
    });
    it('getCategory() should return first', () => {
      expect(plateInstance.getCategory()).to.equal('first');
    });
    it('getFoodGroupList() should return' +
      '[\'Fruit\', \'DairyProduct\', \'Vegetables\']',
      () => {
        expect(plateInstance.getFoodGroupList()).to.deep.equal(
          ['Fruit', 'DairyProduct', 'Vegetables']);
      });
  });
});
