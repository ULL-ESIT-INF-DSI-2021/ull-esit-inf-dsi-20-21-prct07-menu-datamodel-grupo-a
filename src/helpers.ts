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
