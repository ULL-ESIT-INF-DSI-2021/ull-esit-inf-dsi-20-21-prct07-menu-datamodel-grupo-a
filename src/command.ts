import { Carte } from './carte';
import { Menu } from './menu';
import { Plate } from './plate';


export class Command {
  private restaurantCarte: Carte;
  private selectedMenus: Menu[] = [];
  private selectedPlates: Plate[] = [];

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

  public getSelectedMenus(): Menu[] {
    return this.selectedMenus;
  }
  public setSelectedMenus(menus: Menu[]) {
    this.selectedMenus.push(...menus);
  }

  public getSelectedPlates(): Plate[] {
    return this.selectedPlates;
  }

  public setSelectedPlates(plates: Plate[]) {
    this.selectedPlates.push(...plates);
  }

  printDetails(): void {
    console.log(``);
  }
}
