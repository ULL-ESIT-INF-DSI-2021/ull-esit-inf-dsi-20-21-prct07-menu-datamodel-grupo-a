import { Carte } from './carte';
import { Plate } from './plate';
import { jsonPlate } from './jsonPlate';
import inquirer from 'inquirer';
import { UIOptionsCreateCommand, UIOptionsShowCarte, UIOptionsStart }
  from './helpers';
import * as Data from './data';


export class Command {
  private restaurantCarte: Carte;
  private selectedMenus: Object[] = [];
  private selectedPlates: Object[] = [];

  private static commandInstance: Command;

  private constructor() { }

  public static getCommandInstance(): Command {
    if (!Command.commandInstance) {
      Command.commandInstance = new Command();
    }
    return Command.commandInstance;
  }

  public getRestaurantCarte() {
    return this.restaurantCarte;
  }
  public setRestaurantCarte(carte: Carte) {
    this.restaurantCarte = carte;
  }

  public getSelectedMenus(): Object[] {
    return this.selectedMenus;
  }
  public setSelectedMenus(menus: Object[]) {
    this.selectedMenus = menus;
  }

  public getSelectedPlates(): Object[] {
    return this.selectedPlates;
  }
  public setSelectedPlates(plates: Plate[]) {
    this.selectedPlates = jsonPlate.plateCollectionToJson(plates);
  }

  printDetails(): void {
    console.log(``);
  }

  public showMenus() {
    this.getRestaurantCarte().getMenus().forEach((val) => {
      console.log(`${val.getName()}:\n` +
        `\tPlatos: ${val.getPlates().map((val) => val.getName())}\n` +
        `\tValor nutricional: ${val.getKcal().toFixed(2)} kcals\n` +
        `\tPrecio: ${val.getTotalPrice().toFixed(2)} €\n` +
        `\tGrupo alimenticio principal: ${val.getMainGroup()}\n` +
        `\tLista de grupos alimenticios: ${val.getFoodGroupList()}\n`);
    });
  }

  public showPlates() {
    this.getRestaurantCarte().getAvailablePlates().forEach((val) => {
      console.log(`${val.getName()}:\n` +
        `\tIngredientes: ${val.getIngredients().map(
          (val) => val.getName())}\n` +
        `\tValor nutricional: ${val.getKcal().toFixed(2)} kcals\n` +
        `\tPrecio: ${val.getTotalPrice().toFixed(2)} €\n` +
        `\tGrupo alimenticio principal: ${val.getMainGroup()}\n` +
        `\tLista de grupos alimenticios: ${val.getFoodGroupList()}\n`);
    });
  }

  public promptShowCarte() {
    inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Escoge que desea visualizar',
      choices: Object.values(UIOptionsShowCarte)
    }).then((answers) => {
      switch (answers['command']) {
        case UIOptionsShowCarte.ShowMenus:
          this.showMenus();
          break;
        case UIOptionsShowCarte.ShowPlates:
          this.showPlates();
          break;
        case UIOptionsShowCarte.Back:
          break;
      }
      this.promptStart();
    });
  }

  public promptChooseMenu() {
    inquirer.prompt([{
      type: 'checkbox',
      name: 'command',
      message: 'Escoja de entre los menus predeterminados',
      choices: this.getRestaurantCarte().getMenus().map((val) => ({
        name: val.getName(),
        value: val
      }))
    }]).then((answers) => {
      this.setSelectedMenus(answers.command);
      this.promptCreateCommand();
    });
  }

  public promptChoosePlate() {
    inquirer.prompt([{
      type: 'checkbox',
      name: 'command',
      message: 'Escoja de entre los platos predeterminados',
      choices: this.getRestaurantCarte().getAvailablePlates().map((val) => ({
        name: val.getName(),
        value: val
      }))
    }]).then((answers) => {
      this.setSelectedPlates(answers.command);
      this.promptCreateCommand();
    });
  }
  public promptCreateCommand() {
    inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Escoja que desea añadir a su pedido',
      choices: Object.values(UIOptionsCreateCommand)
    }).then((answers) => {
      switch (answers['command']) {
        case UIOptionsCreateCommand.SelectMenu:
          this.promptChooseMenu();
          break;
        case UIOptionsCreateCommand.SelectPlate:
          this.promptChoosePlate();
          break;
        case UIOptionsCreateCommand.Back:
          this.promptStart();
          break;
      }
    });
  }

  public promptStart() {
    inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Bienvenido a la comanda!',
      choices: Object.values(UIOptionsStart)
    }).then((answers) => {
      switch (answers['command']) {
        case UIOptionsStart.ShowCarte:
          this.promptShowCarte();
          break;
        case UIOptionsStart.CreateCommand:
          this.promptCreateCommand();
          break;
      }
    });
  }
}

const testCommand = Command.getCommandInstance();
testCommand.setRestaurantCarte(Data.carteInstance);
testCommand.promptStart();

