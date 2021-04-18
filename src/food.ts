import { macroType, locationType, Printable, Identifiable} from './helpers';

/**
 * @description Class that handles Food, that implements Printable and
 * Identifiable interfaces.
 */
export abstract class Food implements Printable, Identifiable {
  /**
   * @description Food class constructor
   * @param name Consists of a string
   * @param origin Consists of a locationType
   * @param macros Consists of a macroType
   * @param weight Consists of a number
   * @param kcalPer100gr Consists of a number
   * @param pricePerKg Consists of a number
   */
  constructor(private name: string, private origin: locationType,
    private macros: macroType, private weight: number,
    private kcalPer100gr: number, private pricePerKg: number) {

  }

  /**
   * @description Getter for the name
   * @returns Returns a string
   */
  getName(): string {
    return this.name;
  }
  /**
   * @description Getter for the origin
   * @returns Returns a locationType
   */
  getOrigin(): locationType {
    return this.origin;
  }
  /**
   * @description Getter for the macros
   * @returns Returns  macroType
   */
  getMacros(): macroType {
    return this.macros;
  }
  /**
   * @description Getter for the weight
   * @returns Returns a number
   */
  getWeight(): number {
    return this.weight;
  }
  /**
   * @description Getter for the kcal per 100 gr
   * @returns Returns a number
   */
  getKcalPer100gr(): number {
    return this.kcalPer100gr;
  }
  /**
   * @description Getter for the price per kg
   * @returns Returns a number
   */
  getPricePerKg(): number {
    return this.pricePerKg;
  }
  /**
   * @description Setter for the name
   * @param name Consists of a string
   */
  setName(name: string) {
    this.name = name;
  }
  /**
   * @description Setter for the origin
   * @param origin Consists of a locationType
   */
  setOrigin(origin: locationType) {
    this.origin = origin;
  }
  /**
   * @description Setter for the macros
   * @param macros Consists of a macroType
   */
  setMacros(macros: macroType) {
    this.macros = macros;
  }
  /**
   * @description Setter for the weight
   * @param weight Consists of a number
   */
  setWeight(weight: number) {
    this.weight = weight;
  }
  /**
   * @description Setter for the kcal per 100gr
   * @param kcal Consists of a number
   */
  setKcalPer100gr(kcal: number) {
    this.kcalPer100gr = kcal;
  }
  /**
   * @description Setter for the price per kg
   * @param price Consists of a number
   */
  setPricePerKg(price: number) {
    this.pricePerKg = price;
  }
  /**
   * @description Method that calculates the price per weight
   * @returns Returns a number
   */
  calcPricePerWeigth(): number {
    // Assuming that the weight is setted as grams, 1kg equals 1000gr
    return (this.getWeight() / 1000) * this.getPricePerKg();
  }
  /**
   * @description Function that calculates the total kcal of the food
   * @returns Returns a number
   */
  calcKcal(): number {
    // Assuming that we got the kcals per 100g
    return (this.getWeight() * this.getKcalPer100gr()) / 100;
  }
  /**
   * @description Method that prints all the food information
   * @returns Returns a string
   */
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
  /**
   * @description Getter for the class name
   * @returns Returns a string
   */
  getClassName(): string {
    return this.constructor.name;
  }
}
