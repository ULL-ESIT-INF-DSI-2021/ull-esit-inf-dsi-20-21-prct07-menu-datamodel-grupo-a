// import { Menu } from './menu';
// import { Plate } from './plate';
// import { jsonMenu } from './jsonMenu';
// import { jsonPlate } from './jsonPlate';
// import lowdb from 'lowdb';
// import FileSync from 'lowdb/adapters/FileSync';

// type schemaType = {
//   userCommand: {
//     menus: Object[],
//     plates: Object[]
//   }
// }

// export class dbManager {
//   private database: lowdb.LowdbSync<schemaType>;

//   constructor(private username: string, command: Command = {}) {
//     this.database = lowdb(new FileSync('Command.json'));
//     if (this.database.has('command').value()) {
//       const dbCommand = this.database.get('userCommand').value();
//       /* Aqui deberia ir la modificacion de la comanda*/
//     } else {
//       this.database.set('userCommand', command).write();
//       /**/
//     }
//   }
// }
