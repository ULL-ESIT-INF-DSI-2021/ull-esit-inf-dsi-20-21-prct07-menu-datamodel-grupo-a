import { Food } from './food';
import { macroType, locationType } from './helpers';

/**
 * @description Class that handles Fish, that extends Food class.
 */
export class Fish extends Food {
  /**
   * @description Fish class constructor
   * @param name Consists of a string
   * @param origin Consists of a locationType
   * @param macros Consists of a macroType
   * @param weight Consists of a number
   * @param kcalPer100gr Consists of a number
   * @param pricePerKg Consists of a number
   */
  constructor(name: string, origin: locationType, macros: macroType,
    weight: number, kcalPer100gr: number, pricePerKg: number) {
    super(name, origin, macros, weight, kcalPer100gr, pricePerKg);
  }
}
