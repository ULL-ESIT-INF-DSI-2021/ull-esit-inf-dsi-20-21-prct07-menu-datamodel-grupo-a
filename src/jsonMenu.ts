import { Menu } from './menu';
import { jsonPlate } from './jsonPlate';

/**
 * @description Class jsonMenu that is used to parse menus
 */
export class jsonMenu {
  /**
   * @description Static Method that receives a menu and returns an object
   * @param menu Consists of a menu
   * @returns Returns an object
   */
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
  /**
   * @description Static Method that receives a menu array and returns
   * an object array
   * @param selectedMenus Consists of a menu array
   * @returns Returns a object array
   */
  public static menuCollectionToJson(selectedMenus: Menu[]): Object[] {
    return selectedMenus.map((menu) => jsonMenu.getJsonMenu(menu));
  }
}
