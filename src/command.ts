import { Carte } from './carte';
import { Plate } from './plate';
import inquirer from 'inquirer';
import {
  UIModifyMenuOptions,
  UIOptionsCreateCommand, UIOptionsCreateCustom,
  UIOptionsShowCarte, UIOptionsStart
} from './helpers';
import { Menu } from './menu';

/**
 * @description Singleton Command class that handles the Inquirer.js
 * prompts and saves the selected items
 * in correctly typed arrays.
 */
export class Command {
  private restaurantCarte: Carte;
  private selectedMenus: Menu[] = [];
  private selectedPlates: Plate[] = [];
  private static commandInstance: Command;

  private constructor() { }

  /**
   * @description Getter of the singleton instance of the Command class
   * @returns the singleton instance of the Command
   */
  public static getCommandInstance(): Command {
    if (!Command.commandInstance) {
      Command.commandInstance = new Command();
    }
    return Command.commandInstance;
  }
  /**
   * @description Getter method for the restaurant carte
   * @returns Returns a Carte
   */
  public getRestaurantCarte() {
    return this.restaurantCarte;
  }
  /**
   * @description Setter method for the carte
   */
  public setRestaurantCarte(carte: Carte) {
    this.restaurantCarte = carte;
  }
  /**
   * @description Getter menu for the selected menus
   * @returns Returns a menu array
   */
  public getSelectedMenus(): Menu[] {
    return this.selectedMenus;
  }
  /**
   * @description Setter menu for the selected menus, if there are some menus
   * the new ones are added to the existing ones
   * @param menus Consists of a menu array
   */
  public setSelectedMenus(menus: Menu[]) {
    this.selectedMenus.push(...menus);
  }
  /**
   * @description Getter for the selected plates
   * @return Returns a plate array
   */
  public getSelectedPlates(): Plate[] {
    return this.selectedPlates;
  }
  /**
   * @description Setter method for the selected plates, if there are plates
   * the new ones are added to the array of plates
   * @param plates Consists of a plate array
   */
  public setSelectedPlates(plates: Plate[]) {
    this.selectedPlates.push(...plates);
  }

  /**
   * @description prints on the terminal the current state of the Command
   */
  printDetails(): void {
    console.log(`Menus selected: ${this.getSelectedMenus().map(
      (val) => val.getName())}\n` +
      `Plates selected: ${this.getSelectedPlates().map((val) =>
        val.getName())}`);
  }

  /**
   * @description prints the whole information of all menus
   */
  public showMenus() {
    this.getRestaurantCarte().getMenus().forEach((val) => {
      console.log(`${val.getName()}:\n` +
        `\tPlatos: ${val.getPlates().map((val) => val.getName())}\n` +
        `\tValor nutricional: ${val.getKcal().toFixed(2)} kcals\n` +
        `\tPrecio: ${val.getTotalPrice().toFixed(2)} ???\n` +
        `\tGrupo alimenticio principal: ${val.getMainGroup()}\n` +
        `\tLista de grupos alimenticios: ${val.getFoodGroupList()}\n`);
    });
  }

  /**
   * @description prints all plates with their corresponding info
   */
  public showPlates() {
    this.getRestaurantCarte().getAvailablePlates().forEach((val) => {
      console.log(`${val.getName()}:\n` +
        `\tIngredientes: ${val.getIngredients().map(
          (val) => val.getName())}\n` +
        `\tValor nutricional: ${val.getKcal().toFixed(2)} kcals\n` +
        `\tPrecio: ${val.getTotalPrice().toFixed(2)} ???\n` +
        `\tGrupo alimenticio principal: ${val.getMainGroup()}\n` +
        `\tLista de grupos alimenticios: ${val.getFoodGroupList()}\n`);
    });
  }

  /**
   * @description The prompt to delete elements from the existing menu
   * @param menu the menu to be modified
   */
  public promptDeletePlateFromCustomMenu(menu: Menu) {
    this.printDetails();
    inquirer.prompt([{
      type: 'checkbox',
      name: 'command',
      message: 'Escoja de entre los platos a eliminar del menu',
      choices: menu.getPlates().map((val) => ({
        name: val.getName(),
        value: val
      }))
    }]).then((answers) => {
      const platesToDelete = answers.command as Plate[];
      const newPlates = menu.getPlates();
      platesToDelete.forEach((element) => {
        newPlates.splice(platesToDelete.indexOf(element), 1);
      });
      const newMenu = new Menu(`${newPlates[0].getName()}` +
        ` and company custom menu`, newPlates);
      this.setSelectedMenus([newMenu]);
      this.promptCreateCustom();
    });
  }
  /**
   * @description The prompt to add new elements to the existing menu.
   * It comes from [[@link Command.promptModifyMenuOptions]]
   * @param menu the menu from which we are basing the new one
   */
  public promptAddNewPlateToCustomMenu(menu: Menu) {
    this.printDetails();
    inquirer.prompt([{
      type: 'checkbox',
      name: 'command',
      message: 'Escoja de entre los platos predeterminados',
      choices: this.getRestaurantCarte().getAvailablePlates().map((val) => ({
        name: val.getName(),
        value: val
      }))
    }]).then((answers) => {
      const platesOfNewMenu = answers.command as Plate[];
      platesOfNewMenu.concat(menu.getPlates());
      const newMenu = new Menu(`${platesOfNewMenu[0].getName()}` +
        ` and company custom menu`, platesOfNewMenu);
      this.setSelectedMenus([newMenu]);
      this.promptCreateCustom();
    });
  }

  /**
   * @description The prompt to modify an existing menu.
   * It gives the option to either add or delete plates.
   * @param menu the menu from which we are basing the new one
   */
  public promptModifyMenuOptions(menu: Menu) {
    this.printDetails();
    inquirer.prompt([{
      type: 'list',
      name: 'command',
      message: 'Escoja una opcion',
      choices: Object.values(UIModifyMenuOptions)
    }]).then((answers) => {
      switch (answers['command']) {
        case UIModifyMenuOptions.AddNewPlates:
          this.promptAddNewPlateToCustomMenu(menu);
          break;
        case UIModifyMenuOptions.DeletePlates:
          this.promptDeletePlateFromCustomMenu(menu);
          break;
        case UIModifyMenuOptions.Back:
          this.promptChooseMenuCreateCustom();
          break;
      }
    });
  }
  /**
   * @description Creates new menu from plate selected.
   */
  public promptChoosePlateCreateCustom() {
    this.printDetails();
    inquirer.prompt([{
      type: 'checkbox',
      name: 'command',
      message: 'Escoja de entre los platos predeterminados',
      choices: this.getRestaurantCarte().getAvailablePlates().map((val) => ({
        name: val.getName(),
        value: val
      }))
    }]).then((answers) => {
      const platesOfNewMenu = answers.command as Plate[];
      const newMenu = new Menu(`${platesOfNewMenu[0].getName()}` +
        ` and company custom menu`,
        platesOfNewMenu);
      this.setSelectedMenus([newMenu]);
      this.promptCreateCustom();
    });
  }

  /**
   * @description Inquirer prompt, coming from
   * [[@link Command.promptCreateCustom]] that makes the user choose a menu
   * in order to create one from it.
   */
  public promptChooseMenuCreateCustom() {
    this.printDetails();
    inquirer.prompt([{
      type: 'list',
      name: 'command',
      message: 'Escoja de entre los menus predeterminados',
      choices: this.getRestaurantCarte().getMenus().map((val) => ({
        name: val.getName(),
        value: val
      }))
    }]).then((answers) => {
      this.promptModifyMenuOptions(answers.command);
    });
  }

  /**
   * @description Inquirer prompt that gives the option to either create a menu
   * from an existing menu, modifying it, or create a new menu from available
   * plates. Comes from [[@link Command.promptCreateCommand]]
   */
  public promptCreateCustom() {
    this.printDetails();
    inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Escoge la opcion correspondiente',
      choices: Object.values(UIOptionsCreateCustom)
    }).then((answers) => {
      switch (answers['command']) {
        case UIOptionsCreateCustom.SelectStartingMenu:
          this.promptChooseMenuCreateCustom();
          break;
        case UIOptionsCreateCustom.SelectIndividualPlates:
          this.promptChoosePlateCreateCustom();
          break;
        case UIOptionsCreateCustom.Back:
          this.promptStart();
          break;
      }
    });
  }
  /**
   * @description Shows all available plates and makes the user choose any
   * number of them in order to add them in a non menu way. Comes from
   * [[@link Command.promptCreateCommand]]
   */
  public promptChoosePlate() {
    this.printDetails();
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

  /**
  * @description Inquirer prompt, coming from
  * [[@link Command.promptCreateCommand]]
  * that makes you choose between different menus to add to a command
  */
  public promptChooseMenu() {
    this.printDetails();
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

  /**
   * @description one of the base prompts, coming from
   * [[@link Command.promptStart]], gives the user the options to create a new
   * command, either through existing menus and plates, or through the creation
   * of new menus, that can be created from existing menus or from scratch
   */
  public promptCreateCommand() {
    this.printDetails();
    inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Escoja que desea a??adir a su pedido',
      choices: Object.values(UIOptionsCreateCommand)
    }).then((answers) => {
      switch (answers['command']) {
        case UIOptionsCreateCommand.SelectMenu:
          this.promptChooseMenu();
          break;
        case UIOptionsCreateCommand.SelectPlate:
          this.promptChoosePlate();
          break;
        case UIOptionsCreateCommand.CreateCustom:
          this.promptCreateCustom();
          break;
        case UIOptionsCreateCommand.Back:
          this.promptStart();
          break;
      }
    });
  }

  /**
 * @description Inquirer prompt that gives the option to either show all
 * menus or show all plates, coming from [[@link Command.promptStart]]
 */
  public promptShowCarte() {
    this.printDetails();
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
  /**
   * @description The starting prompt for the command.
   */
  public promptStart() {
    this.printDetails();
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

