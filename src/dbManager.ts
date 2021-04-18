import { Menu } from './menu';
import { Plate } from './plate';
import { Command } from './command';
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
