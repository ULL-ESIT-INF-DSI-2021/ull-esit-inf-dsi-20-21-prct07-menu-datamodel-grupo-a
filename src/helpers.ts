export type locationType = {
  country: string,
  city: string,
}

export type macroType = {
  carbs: number,
  proteins: number,
  lipids: number;
}


export type plateCategory = 'entree' | 'first' | 'second' | 'dessert';

export interface Printable {
  print(): void;
}

export interface Identifiable {
  getClassName(): string;
}

export enum UIOptionsStart {
  ShowCarte = 'Visualizar la carta',
  CreateCommand = 'Crear nueva comanda',
  Quit = 'Salir'
}

export enum UIOptionsShowCarte {
  ShowMenus = 'Visualizar menus disponibles',
  ShowPlates = 'Visualizar platos disponibles',
  Back = 'Volver al nivel anterior'
}

export enum UIOptionsCreateCommand {
  SelectMenu = 'Seleccionar menus prestablecidos',
  SelectPlate = 'Seleccionar platos individuales',
  Back = 'Volver al nivel anterior'
}
