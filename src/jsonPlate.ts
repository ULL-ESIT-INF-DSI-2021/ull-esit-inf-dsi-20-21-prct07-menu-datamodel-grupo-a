import { Plate } from './plate';

export class jsonPlate {
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
}
