import { Plate } from './plate';

/**
 * @description Class jsonPlate that is used to parse Plates
 */
export class jsonPlate {
  /**
   * @description Static Method that receives a Plate and returns an object
   * @param plate Consists of a plate
   * @returns Returns an object
   */
  public static getJsonPlate(plate: Plate): Object {
    return {
      name: plate.getName(),
      ingredients: plate.getIngredients().map((item) => item.getName()),
      category: plate.getCategory(),
      kcal: plate.getKcal(),
      totalPrice: plate.getTotalPrice(),
      mainGroup: plate.getMainGroup(),
      foodGroupList: plate.getFoodGroupList(),
    };
  }
  /**
   * @description Static method that receives a plate array and returns an
   * object
   * @param selectedPlates Consists of a plate array
   * @returns Returns an object array
   */
  public static plateCollectionToJson(selectedPlates: Plate[]): Object[] {
    return selectedPlates.map((plate) => jsonPlate.getJsonPlate(plate));
  }
}
