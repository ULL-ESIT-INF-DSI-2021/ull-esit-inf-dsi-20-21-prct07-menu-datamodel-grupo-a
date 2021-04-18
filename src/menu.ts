import { Plate } from './plate';

/**
 * @description Class that handles a Menu, made out of different plates.
 */
export class Menu {
  private kcal: number;
  private totalPrice: number;
  private mainGroup: string;
  private foodGroupList: string[];

  /**
   * @description Class menu constructor
   * @param name Consists of a string
   * @param plates Consists of a plate array
   */
  constructor(private name: string, private plates: Plate[]) {
    this.update();
  }
  /**
   * @description Method that adds a plate to a menu
   * @param newPlate Consists of a plate
   */
  public add(newPlate: Plate) {
    this.getPlates().push(newPlate);
    this.update();
  }
  /**
   * @description Method that removes a plate from a menu
   * @param newPlate Consists of a plate
   * @returns Returns a boolean
   */
  public remove(newPlate: Plate): boolean {
    if (this.getPlates().includes(newPlate)) {
      this.getPlates().splice(this.getPlates().indexOf(newPlate), 1);
      this.update();
      return true;
    }
    return false;
  }
  /**
   * @description Method that sets all the menu values after it
   * checks the validity of the menu
   */
  private update() {
    if (!this.plateValidityCheck(this.plates)) {
      throw new Error('Either the number of plates or the amount' +
        'of plate categories is invalid');
    }
    this.setKcal(this.calcKcal());
    this.setTotalPrice(this.calcTotalPrice());
    this.setFoodGroupList(this.getGroupList());
    this.setMainGroup(this.calcMainGroup());
  }
  /**
   * @description Method that checks the validity of the menu
   * @param plates Consists of a plate array
   * @returns Returns a boolean
   */
  private plateValidityCheck(plates: Plate[]): boolean {
    if (plates.length < 3) {
      return false;
    } else {
      const categoriesIncluded: string[] = [];
      plates.forEach((val) => {
        if (!categoriesIncluded.includes(val.getCategory())) {
          categoriesIncluded.push(val.getCategory());
        }
      });
      if (categoriesIncluded.length < 3) {
        return false;
      }
    }
    return true;
  }
  /**
   * @description Getter for the name
   * @returns Returns a string
   */
  public getName(): string {
    return this.name;
  }
  /**
   * @description Setter for the name
   * @param name Consists of a string
   */
  public setName(name: string): void {
    this.name = name;
  }
  /**
   * @description Getter for the plates
   * @returns Returns a plate array
   */
  public getPlates(): Plate[] {
    return this.plates;
  }
  /**
   * @description Setter for the plates
   * @param plates Consists of a plate array
   */
  public setPlates(plates: Plate[]): void {
    this.plates = plates;
  }
  /**
   * @description Getter for the kcal
   * @returns Returns a number
   */
  public getKcal(): number {
    return this.kcal;
  }
  /**
   * @description Setter for the kcal
   * @param kcal Consists of a number
   */
  public setKcal(kcal: number): void {
    this.kcal = kcal;
  }
  /**
   * @description Method that returns the total menu price
   * @returns Returns a number
   */
  public getTotalPrice(): number {
    return this.totalPrice;
  }
  /**
   * @description Setter for the total price
   * @param totalPrice Consists of a number
   */
  public setTotalPrice(totalPrice: number): void {
    this.totalPrice = totalPrice;
  }
  /**
   * @description Getter for the menu main group
   * @returns Returns a string
   */
  public getMainGroup(): string {
    return this.mainGroup;
  }
  /**
   * @description Setter for the menu main group
   * @param mainGroup Consists of a string
   */
  public setMainGroup(mainGroup: string): void {
    this.mainGroup = mainGroup;
  }
  /**
   * @description Getter for the menu group list
   * @returns Returns a string array
   */
  public getFoodGroupList(): string[] {
    return this.foodGroupList;
  }
  /**
   * @description Setter for the menu group list
   * @param foodGroupList Consists of a string array
   */
  public setFoodGroupList(foodGroupList: string[]): void {
    this.foodGroupList = foodGroupList;
  }
  /**
   * @description Method that calculates all the kcal in the menu
   * @returns Returns a number
   */
  public calcKcal(): number {
    let result: number = 0;
    this.getPlates().forEach((value) => {
      result += value.calcKcal();
    });
    return result;
  }
  /**
   * @description Method that calculates the total price of the menu
   * @returns Returns a number
   */
  public calcTotalPrice(): number {
    let result: number = 0;
    this.getPlates().forEach((value) => {
      result += value.getTotalPrice();
    });
    return result;
  }
  /**
   * @description Getter for the menu group list
   * @returns Returns a string array
   */
  public getGroupList(): string[] {
    const result = new Set<string>();
    this.getPlates().forEach((value) => {
      value.getFoodGroupList().forEach((element) => {
        result.add(element);
      });
    });
    return Array.from(result.values());
  }
  /**
   * @description Method that calculates the food main group of the menu
   * @returns Returns a string
   */
  public calcMainGroup(): string {
    const groupList: string[] = this.getGroupList();
    const result = groupList.sort((a, b) => {
      return groupList.filter((v) => v === a).length -
        groupList.filter((v) => v === b).length;
    }).pop();
    if (result == undefined) {
      return '';
    } else {
      return result;
    }
  }
}
