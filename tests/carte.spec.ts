import 'mocha';
import { expect } from 'chai';
import { Fruit } from '../src/fruit';
import { DairyProduct } from '../src/dairyProduct';
import { Vegetables } from '../src/vegetables';
import { Meat } from '../src/meat';
import { Plate } from '../src/plate';
import { Menu } from '../src/menu';
import { Carte } from '../src/carte';

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

const steak = new Meat('ribeye',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 0, lipids: 8.95, proteins: 19.62 }, 250, 165, 19.99);

const asparagus = new Vegetables('asparagus',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 3.88, lipids: 0.12, proteins: 2.2 }, 50, 20, 8.60);

const iceCream = new DairyProduct('ice cream',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 28.2, lipids: 11, proteins: 3.8 }, 50, 216, 11.80);

const banana = new Fruit('banana',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 22.84, lipids: 0.33, proteins: 1.09 }, 50, 89, 2.05);

const manchegoSalad = new Plate('manchego salad',
  [apple, cheese, spinach, arugula], 'first');

const steakNAsparagus =
  new Plate('steak and roasted asparagus',
    [steak, asparagus], 'second');

const bananaSplit = new Plate('banana split',
  [iceCream, banana], 'dessert');

const menuInstance1 = new Menu('testMenu1',
  [manchegoSalad, steakNAsparagus, bananaSplit]);

const menuInstance2 = new Menu('testMenu2',
  [steakNAsparagus, manchegoSalad, manchegoSalad, bananaSplit]);

const carteInstance = new Carte('testCarte',
  [menuInstance1, menuInstance2]);

describe('Carte class methods tested with a carte class instance', () => {
  describe('Getters', () => {
    it('getName() should return testMenu', () => {
      expect(carteInstance.getName()).to.equal('testCarte');
    });
    it('getAvailablePlates() should be size 7', () => {
      expect(carteInstance.getAvailablePlates().length).to.equal(7);
    });
    it('getAvailableMenus() should size 2',
      () => {
        expect(carteInstance.getAvailableMenus().length).to
          .equal(2);
      });
  });
});
