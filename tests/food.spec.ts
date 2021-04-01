import 'mocha';
import { expect } from 'chai';
import { Fruit } from '../src/fruit';

  const apple = new Fruit('apple', { country: 'Spain', city: 'Granada' },
    { carbs: 12, lipids: 0.17, proteins: 0.3 }, 170, 53, 1.65);

  const seteableFruit = new Fruit('orange', { country: 'Germany',
  city: 'Munchen' }, { carbs: 7, lipids: 0.37, proteins: 0.8 }, 245, 49, 1.25);

describe('Food class methods tested with a fruit class instance', () => {
  describe('Getters', () => {
    it('getName() should return apple', () => {
      expect(apple.getName()).to.equal('apple');
    });
    it('getOrigin() should return country: Spain, city: Granada', () => {
      expect(apple.getOrigin()).to.eql({country: 'Spain', city: 'Granada'});
    });
    it('getMacros() should return carbs: 12, lipids: 0.17, proteins: 0.3',
      () => {
      expect(apple.getMacros()).to
        .eql({ carbs: 12, lipids: 0.17, proteins: 0.3 });
    });
    it('getWeight() should return 170', () => {
      expect(apple.getWeight()).to.equal(170);
    });
    it('getKcalPer100gr() should return 53', () => {
      expect(apple.getKcalPer100gr()).to.equal(53);
    });
    it('getPricePerKg() should return 1.65', () => {
      expect(apple.getPricePerKg()).to.equal(1.65);
    });
  });

  describe('Setters', () => {
    it('setName(apple) set apple as name', () => {
      seteableFruit.setName('apple');
      expect(seteableFruit.getName()).to.equal('apple');
    });
    it('setOrigin({country: New Zealand, city: Wellington}' +
      'should set country to New Zealand and city to Wellington', () => {
      seteableFruit.setOrigin({country: 'New Zealand', city: 'Wellington'});
      expect(seteableFruit.getOrigin()).to
        .eql({ country: 'New Zealand', city: 'Wellington' });
    });
    it('setMacros({carbs: 25, lipids: 0.88, proteins: 0.66 }) should' +
      ' set macros to carbs: 25, lipids: 0.88, proteins: 0.66', () => {
        seteableFruit.setMacros({carbs: 25, lipids: 0.88, proteins: 0.66});
      expect(seteableFruit.getMacros()).to
        .eql({ carbs: 25, lipids: 0.88, proteins: 0.66 });
    });
    it('setWeight(55) should set weight to 55', () => {
      seteableFruit.setWeight(55);
      expect(seteableFruit.getWeight()).to.equal(55);
    });
    it('setKcalPer100gr(32) should set KcalPer100gr to 32', () => {
      seteableFruit.setKcalPer100gr(32);
      expect(seteableFruit.getKcalPer100gr()).to.equal(32);
    });
    it('setPricePerKg(1.98) should set PricePerKg to 1.98', () => {
      seteableFruit.setPricePerKg(1.98);
      expect(seteableFruit.getPricePerKg()).to.equal(1.98);
    });
  });

  describe('Methods', () => {
    it('calcKcal() should return 90.1', () => {
      expect(apple.calcKcal()).to.equal(90.1);
    });
    it('calcPricePerWeigth() should return 0.2805', () => {
      expect(apple.calcPricePerWeigth()).to.equal(0.2805);
    });
  });

  describe('Interface inherited methods', () => {
    it('print() should return the following data:\n' + '\t Class: Fruit' +
      '\n\t Name: apple' +
      '\n\t Origin: [Country: Spain, City: Granada]' +
      '\n\t Macros: [Carbs: 12, Proteins: 0.3, Lipids: 0.17]' +
      '\n\t Kcal per 100 gr: 53' +
      '\n\t Price per kg: 1.65', () => {
      expect(apple.print()).to.equal('Class: Fruit' +
      '\nName: apple' +
      '\nOrigin: [Country: Spain, City: Granada]' +
      '\nMacros: [Carbs: 12, Proteins: 0.3, Lipids: 0.17]' +
      '\nKcal per 100 gr: 53' +
      '\nPrice per kg: 1.65');
    });
    it('getClassName() should return Fruit', () => {
      expect(apple.getClassName()).to.equal('Fruit');
    });
  });
});
