/* eslint-disable no-unused-vars */

/**
 * @description Type that represents a location
 */
export type locationType = {
  country: string,
  city: string,
}

/**
 * @description Type that represents a macro, that contains carbs, proteins
 *  and lipids
 */
export type macroType = {
  carbs: number,
  proteins: number,
  lipids: number;
}

/**
 * @description Type that defines the possible plate categorys
 */
export type plateCategory = 'entree' | 'first' | 'second' | 'dessert';

/**
 * @description Interface that defines a Class that implements it as a
 *  Printable class
 */
export interface Printable {
  print(): void;
}

/**
 * @description Interface that defines a Class that implements it as a
 *  Identifiable class
 */
export interface Identifiable {
  getClassName(): string;
}

/**
 * @description Enum used for the inquirer module, represents the first menu
 * options for the user in UI interface
 */
export enum UIOptionsStart {
  ShowCarte = 'Visualizar la carta',
  CreateCommand = 'Crear nueva comanda',
  Quit = 'Salir'
}

/**
 * @description Enum used for the inquirer module, represents menu
 * options for the user in UI interface for watching available menus and plates
 * or to go back to the previus menu
 */
export enum UIOptionsShowCarte {
  ShowMenus = 'Visualizar menus disponibles',
  ShowPlates = 'Visualizar platos disponibles',
  Back = 'Volver al nivel anterior'
}

/**
 * @description Enum used for the inquirer module, represents menu
 * options for the user in UI interface where an user can select
 * individual plates or select preestablished menus
 */
export enum UIOptionsCreateCommand {
  SelectMenu = 'Seleccionar menus prestablecidos',
  SelectPlate = 'Seleccionar platos individuales',
  CreateCustom = 'Crear menu nuevo',
  Back = 'Volver al nivel anterior'
}

/**
 * @description Enum used for the inquirer module, represents menu
 * options for the user in UI interface where the user can select options
 * for create a menu from an existing one, or a menu from existing individual
 *  plates
 */
export enum UIOptionsCreateCustom {
  SelectIndividualPlates = 'Crear menu en base a platos individuales',
  SelectStartingMenu = 'Seleccionar menu a modificar',
  Back = 'Volver al nivel anterior'
}

/**
 * @description Enum used for the inquirer module, represents menu
 * options for the user in UI interface that allow the user to add or delete
 * plates when creating a menu
 */
export enum UIModifyMenuOptions {
  AddNewPlates = 'Agregar nuevos platos al menu',
  DeletePlates = 'Borrar platos del menu',
  Back = 'Volver al nivel anterior'
}
