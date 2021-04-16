import { plateCategory } from './helpers';
import { Food } from './food';

/**
 * Class that handles a Plate, made out of different foods.
 */
export class Plate {
  private kcal: number;
  private totalPrice: number;
  private mainGroup: string;
  private foodGroupList: string[];


  constructor(private name: string, private ingredients: Food[],
    private category: plateCategory) {
    this.setKcal(this.calcKcal());
    this.setTotalPrice(this.calcTotalPrice());
    this.setFoodGroupList(this.getGroupList());
    this.setMainGroup(this.calcMainGroup());
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getIngredients(): Food[] {
    return this.ingredients;
  }

  public setIngredients(ingredients: Food[]): void {
    this.ingredients = ingredients;
  }

  public getKcal(): number {
    return this.kcal;
  }

  public setKcal(kcal: number): void {
    this.kcal = kcal;
  }

  public getTotalPrice(): number {
    return this.totalPrice;
  }

  public setTotalPrice(totalPrice: number): void {
    this.totalPrice = totalPrice;
  }

  public getMainGroup(): string {
    return this.mainGroup;
  }

  public setMainGroup(mainGroup: string): void {
    this.mainGroup = mainGroup;
  }

  public getCategory(): plateCategory {
    return this.category;
  }

  public setCategory(category: plateCategory): void {
    this.category = category;
  }

  public getFoodGroupList(): string[] {
    return this.foodGroupList;
  }

  public setFoodGroupList(foodGroupList: string[]): void {
    this.foodGroupList = foodGroupList;
  }

  public calcKcal(): number {
    let result: number = 0;
    this.getIngredients().forEach((value) => {
      result += value.calcKcal();
    });
    return result;
  }

  public calcTotalPrice(): number {
    let result: number = 0;
    this.getIngredients().forEach((value) => {
      result += value.calcPricePerWeigth();
    });
    return result;
  }

  public getGroupList(): string[] {
    const result: string[] = [];
    this.getIngredients().forEach((value) => {
      if (!result.includes(value.getClassName())) {
        result.push(value.getClassName());
      }
    });
    return result;
  }

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
