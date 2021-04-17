import { Menu } from './menu';
import { jsonPlate } from './jsonPlate';

export class jsonMenu {
  public static getJsonMenu(menu: Menu): Object {
    return {
      name: menu.getName(),
      plates: menu.getPlates().map((plate) => jsonPlate.getJsonPlate(plate)),
      kcal: menu.getKcal(),
      totalPrice: menu.getTotalPrice(),
      mainGroup: menu.getMainGroup(),
      foodGroupList: menu.getFoodGroupList(),
    };
  }

  public static menuCollectionToJson(selectedMenus: Menu[]): Object[] {
    return selectedMenus.map((menu) => jsonMenu.getJsonMenu(menu));
  }
}
