import { Menu } from './menu';
import { Plate } from './plate';
import { Command } from './command';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

/**
 * @description Type used for the lowdb module
 */
type schemaType = {
  userCommand: {
    menus: Menu[],
    plates: Plate[]
  }
}

/**
 * @description Class that represents the db manager
 */
export class DBManager {
  private database: lowdb.LowdbSync<schemaType>;
  /**
   * @description Constructor of the DBManager class
   * @param username Consists of a string
   * @param command Consists of a Command
   */
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
  /**
   * @description Method that updates the database by writing on it the existing
   * command instance
   */
  storeCommand() {
    this.database.set('userCommand', Command.getCommandInstance()).write();
  }
}
