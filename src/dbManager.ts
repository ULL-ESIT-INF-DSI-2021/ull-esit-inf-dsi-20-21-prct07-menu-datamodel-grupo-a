import { Menu } from './menu';
import { Plate } from './plate';
import { Command } from './command';
import * as Data from './data';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

type schemaType = {
  userCommand: {
    menus: Menu[],
    plates: Plate[]
  }
}

export class DBManager {
  private database: lowdb.LowdbSync<schemaType>;

  constructor(private username: string, command: Command) {
    this.database = lowdb(new FileSync('Command.json'));
    if (this.database.has('userCommand.menus').value() ||
        this.database.has('userCommand.plates').value()) {
      const dbCommand = this.database.get('userCommand').value();
      command.setSelectedMenus(dbCommand.menus);
      command.setSelectedPlates(dbCommand.plates);
    } else {
      this.database.set('userCommand', command).write();
    }
  }

  storeCommand() {
    this.database.set('userCommand', Command.getCommandInstance()).write();
  }
}


const menu1 = new Menu('menu1', [
  Data.hummus,
  Data.manchegoSalad,
  Data.steakNAsparagus,
  Data.bananaSplit]);
const menu2 = new Menu('menu2', [
  Data.hummus,
  Data.manchegoSalad,
  Data.steakNAsparagus,
  Data.bananaSplit,
  Data.strawberryIcecream]);
const menu3 = new Menu('menu3', [
  Data.spinachDip,
  Data.manchegoSalad,
  Data.steakNAsparagus,
  Data.strawberryIcecream]);

const nestorCommand = Command.getCommandInstance();
nestorCommand.setSelectedMenus([menu1, menu2]);
const manager = new DBManager('nestor command', nestorCommand);
nestorCommand.setSelectedMenus([menu3]);
manager.storeCommand();
