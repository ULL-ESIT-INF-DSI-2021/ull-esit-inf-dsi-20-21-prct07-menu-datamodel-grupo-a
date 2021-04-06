import { macroType, locationType, Printable, Identifiable} from './helpers';

export abstract class Food implements Printable, Identifiable {
  constructor(private name: string, private origin: locationType,
    private macros: macroType, private weight: number,
    private kcalPer100gr: number, private pricePerKg: number) {

  }

  // Getters & setters

  getName(): string {
    return this.name;
  }

  getOrigin(): locationType {
    return this.origin;
  }

  getMacros(): macroType {
    return this.macros;
  }

  getWeight(): number {
    return this.weight;
  }

  getKcalPer100gr(): number {
    return this.kcalPer100gr;
  }

  getPricePerKg(): number {
    return this.pricePerKg;
  }

  setName(name: string) {
    this.name = name;
  }

  setOrigin(origin: locationType) {
    this.origin = origin;
  }

  setMacros(macros: macroType) {
    this.macros = macros;
  }

  setWeight(weight: number) {
    this.weight = weight;
  }

  setKcalPer100gr(kcal: number) {
    this.kcalPer100gr = kcal;
  }

  setPricePerKg(price: number) {
    this.pricePerKg = price;
  }

  // Methods

  calcPricePerWeigth(): number {
    // Assuming that the weight is setted as grams, 1kg equals 1000gr
    return (this.getWeight() / 1000) * this.getPricePerKg();
  }

  calcKcal(): number {
    // Assuming that we got the kcals per 100g
    return (this.getWeight() * this.getKcalPer100gr()) / 100;
  }

  // Interface methods

  print() {
    return 'Class: ' + this.getClassName() +
      '\nName: ' + this.getName() +
      '\nOrigin: ' + '[Country: ' + this.getOrigin().country +
      ', City: ' + this.getOrigin().city + ']' +
      '\nMacros: ' + '[Carbs: ' + this.getMacros().carbs +
      ', Proteins: ' + this.getMacros().proteins +
      ', Lipids: ' + this.getMacros().lipids + ']' +
      '\nKcal per 100 gr: ' + this.getKcalPer100gr() +
      '\nPrice per kg: ' + this.getPricePerKg();
  }

  getClassName(): string {
    return this.constructor.name;
  }
}
