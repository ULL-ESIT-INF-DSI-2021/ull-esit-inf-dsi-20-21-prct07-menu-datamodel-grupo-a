import { plateCategory } from './helpers';
import { Food } from './food';

/**
 * @description Class that handles a Plate, made out of different foods.
 */
export class Plate {
  private kcal: number;
  private totalPrice: number;
  private mainGroup: string;
  private foodGroupList: string[];
  private id: number;

  /**
   * @description Constructor of plate class
   * @param name Consists of a string
   * @param ingredients Consists of a food array
   * @param category Consists of a plateCategory
   */
  constructor(private name: string, private ingredients: Food[],
    private category: plateCategory) {
    this.setId(Math.floor(Math.random() * (20000000 - 1) + 1));
    this.setKcal(this.calcKcal());
    this.setTotalPrice(this.calcTotalPrice());
    this.setFoodGroupList(this.getGroupList());
    this.setMainGroup(this.calcMainGroup());
  }

  /**
* @description Getter for the id
* @returns Returns a number
*/
  public getId(): number {
    return this.id;
  }

  /**
  * @description Setter for the id
  * @param name Consists of a number
  */
  public setId(id: number): void {
    this.id = id;
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
   * @description Getter for the ingredients
   * @returns Returns a food array
   */
  public getIngredients(): Food[] {
    return this.ingredients;
  }
  /**
   * @description Setter for the ingredients
   * @param ingredients Consists of a food array
   */
  public setIngredients(ingredients: Food[]): void {
    this.ingredients = ingredients;
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
   * @description Getter for the total price
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
   * @description Getter for the food main group of the plate
   * @returns Returns a string
   */
  public getMainGroup(): string {
    return this.mainGroup;
  }
  /**
   * @description Setter for the food main group of the plate
   * @param mainGroup Consists of a string
   */
  public setMainGroup(mainGroup: string): void {
    this.mainGroup = mainGroup;
  }
  /**
   * @description Getter for the category
   * @returns Returns a plateCategory
   */
  public getCategory(): plateCategory {
    return this.category;
  }
  /**
   * @description Setter for the plate category
   * @param category Consists of a plateCategory
   */
  public setCategory(category: plateCategory): void {
    this.category = category;
  }
  /**
   * @description Getter for the plate main food group list
   * @returns Returns a string array
   */
  public getFoodGroupList(): string[] {
    return this.foodGroupList;
  }
  /**
   * @description Setter for the plate food group list
   * @param foodGroupList Consists of a string array
   */
  public setFoodGroupList(foodGroupList: string[]): void {
    this.foodGroupList = foodGroupList;
  }
  /**
   * @description Method that calculates the total plate kcal
   * @returns Returns a number
   */
  public calcKcal(): number {
    let result: number = 0;
    this.getIngredients().forEach((value) => {
      result += value.calcKcal();
    });
    return result;
  }
  /**
   * @description Method that calculates the total price of the plate
   * @returns Returns a number
   */
  public calcTotalPrice(): number {
    let result: number = 0;
    this.getIngredients().forEach((value) => {
      result += value.calcPricePerWeigth();
    });
    return result;
  }
  /**
   * @description Getter for the plate group list
   * @returns Returns a string array
   */
  public getGroupList(): string[] {
    const result: string[] = [];
    this.getIngredients().forEach((value) => {
      if (!result.includes(value.getClassName())) {
        result.push(value.getClassName());
      }
    });
    return result;
  }
  /**
   * @description Method that calculated the plate main food group
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
