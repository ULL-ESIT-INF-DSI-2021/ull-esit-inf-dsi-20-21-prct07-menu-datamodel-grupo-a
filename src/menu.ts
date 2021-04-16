import { plateCategory } from './helpers';
import { Food } from './food';
import { Plate } from './plate';

/**
 * Class that handles a Menu, made out of different plates.
 */
export class Menu {
  private kcal: number;
  private totalPrice: number;
  private mainGroup: string;
  private foodGroupList: string[];


  constructor(private name: string, private plates: Plate[]) {
    this.update();
  }

  public add(newPlate: Plate) {
    this.getPlates().push(newPlate);
    this.update();
  }

  public remove(newPlate: Plate): boolean {
    if (this.getPlates().includes(newPlate)) {
      this.getPlates().splice(this.getPlates().indexOf(newPlate), 1);
      this.update();
      return true;
    }
    return false;
  }

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

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getPlates(): Plate[] {
    return this.plates;
  }

  public setPlates(plates: Plate[]): void {
    this.plates = plates;
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

  public getFoodGroupList(): string[] {
    return this.foodGroupList;
  }

  public setFoodGroupList(foodGroupList: string[]): void {
    this.foodGroupList = foodGroupList;
  }

  public calcKcal(): number {
    let result: number = 0;
    this.getPlates().forEach((value) => {
      result += value.calcKcal();
    });
    return result;
  }

  public calcTotalPrice(): number {
    let result: number = 0;
    this.getPlates().forEach((value) => {
      result += value.getTotalPrice();
    });
    return result;
  }

  public getGroupList(): string[] {
    const result: string[] = [];
    this.getPlates().forEach((value) => {
      result.concat(value.getFoodGroupList());
    });
    return [...new Set(result)];
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
