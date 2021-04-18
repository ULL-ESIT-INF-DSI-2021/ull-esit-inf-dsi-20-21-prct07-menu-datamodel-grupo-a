import { Menu } from './menu';
import { Plate } from './plate';

/**
 * @description Class that handles a Carte, made out of different menus.
 */
export class Carte {
  private availablePlates: Plate[];

  /**
   * @description Carte class constructor
   * @param menus Consists of a menu array
   */
  constructor(private menus: Menu[]) {
    this.update();
  }
  /**
   * @description Getter method for available plates
   * @returns Returns a plate array
   */
  public getAvailablePlates(): Plate[] {
    return this.availablePlates;
  }
  /**
   * @description Setter for the available plates
   * @param availablePlates Consists of plate array
   */
  public setAvailablePlates(availablePlates: Plate[]): void {
    this.availablePlates = availablePlates;
  }
  /**
   * @description Getter for the menus
   * @returns Returns a menu array
   */
  public getMenus(): Menu[] {
    return this.menus;
  }
  /**
   * @description Setter for the menus
   * @param menus Consists of a menu array
   */
  public setMenus(menus: Menu[]): void {
    this.menus = menus;
  }
  /**
   * @description Private method that initializes all available menus and plates
   * and it is called on the constructor
   */
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
