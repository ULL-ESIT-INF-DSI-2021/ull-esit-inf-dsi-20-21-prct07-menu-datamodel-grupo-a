import { Carte } from './carte';
import { Menu } from './menu';
import { Plate } from './plate';
import { jsonMenu } from './jsonMenu';
import { jsonPlate } from './jsonPlate';


export class Command {
  private restaurantCarte: Carte;
  private selectedMenus: Object[];
  private selectedPlates: Object[];

  private static commandInstance: Command;

  private constructor() { }

  public static getCommandInstance(): Command {
    if (!Command.commandInstance) {
      Command.commandInstance = new Command();
    }
    return Command.commandInstance;
  }

  public getRestaurantCarte() {
    return this.restaurantCarte;
  }
  public setRestaurantCarte(carte: Carte) {
    this.restaurantCarte = carte;
  }

  public getSelectedMenus(): Object[] {
    return this.selectedMenus;
  }
  public setSelectedMenus(menus: Menu[]) {
    this.selectedMenus = jsonMenu.menuCollectionToJson(menus);
  }

  public getSelectedPlates(): Object[] {
    return this.selectedPlates;
  }
  public setSelectedPlates(plates: Plate[]) {
    this.selectedPlates = jsonPlate.plateCollectionToJson(plates);
  }

  printDetails(): void {
    console.log(``);
  }
}
