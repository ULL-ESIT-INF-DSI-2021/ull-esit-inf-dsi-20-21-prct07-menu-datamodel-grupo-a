import { Menu } from './menu';
import { Plate } from './plate';

/**
 * Class that handles a Carte, made out of different menus.
 */
export class Carte {
  private availablePlates: Plate[];

  constructor(private menus: Menu[]) {
    this.update();
  }

  public getAvailablePlates(): Plate[] {
    return this.availablePlates;
  }

  public setAvailablePlates(availablePlates: Plate[]): void {
    this.availablePlates = availablePlates;
  }

  public getMenus(): Menu[] {
    return this.menus;
  }

  public setMenus(menus: Menu[]): void {
    this.menus = menus;
  }

  private update() {
    this.setAvailablePlates([]);
    this.getMenus().forEach((element) => {
      element.getPlates().forEach((element) => {
        this.getAvailablePlates().push(element);
      });
    });
    this.setAvailablePlates(Array.from(new Set(this.getAvailablePlates())));
  }
}
