import { Menu } from './menu';
import { Plate } from './plate';
import { jsonMenu } from './jsonMenu';
import { jsonPlate } from './jsonPlate';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

type schemaType = {
  userCommand: {
    menus: Object[],
    plates: Object[]
  }
}

export class dbManager {
  private database: lowdb.LowdbSync<schemaType>;

  constructor(private username: string, command: Command = {}) {
    this.database = lowdb(new FileSync('Command.json'));
    if (this.database.has('command').value()) {
      const dbCommand = this.database.get('userCommand').value();
      /* Aqui deberia ir la modificacion de la comanda*/
    } else {
      this.database.set('userCommand', command).write();
      /**/
    }
  }

  public menuCollectionToJson(selectedMenus: Menu[]): Object[] {
    return selectedMenus.map((menu) => jsonMenu.getJsonMenu(menu));
  }

  public plateCollectionToJson(selectedPlates: Plate[]): Object[] {
    return selectedPlates.map((plate) => jsonPlate.getJsonPlate(plate));
  }

  public setMenuCollection(selectedMenus: Menu[]) {
    this.menuJsonCollection = this.menuCollectionToJson(selectedMenus);
  }

  public setPlatesCollection(selectedPlates: Plate[]) {
    this.platesJsonCollection = this.plateCollectionToJson(selectedPlates);
  }
}
