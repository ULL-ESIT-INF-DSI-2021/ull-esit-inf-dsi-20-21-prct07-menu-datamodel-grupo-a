import { Food } from './food';
import { macroType, locationType } from './helpers';

export class Vegetables extends Food {
  constructor(name: string, origin: locationType, macros: macroType,
    weight: number, kcalPer100gr: number, pricePerKg: number) {
    super(name, origin, macros, weight, kcalPer100gr, pricePerKg);
  }
}
