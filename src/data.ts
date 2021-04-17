import { Fruit } from '../src/fruit';
import { DairyProduct } from '../src/dairyProduct';
import { Vegetables } from '../src/vegetables';
import { Meat } from '../src/meat';
import { Plate } from '../src/plate';
import { Menu } from '../src/menu';
import { Carte } from '../src/carte';
import { Seed } from './seed';
import { Fish } from './fish';
import { EggProduct } from './eggProduct';
import { Legume } from './legume';


// Available foods/ingredients

//  Fruit

const apple = new Fruit('apple', { country: 'Spain', city: 'Granada' },
  { carbs: 12, lipids: 0.17, proteins: 0.3 }, 50, 53, 1.65);

const banana = new Fruit('banana',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 22.84, lipids: 0.33, proteins: 1.09 }, 50, 89, 2.05);

const avocado = new Fruit('avocado',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 5.9, lipids: 12, proteins: 1.5 }, 50, 141, 8);

const strawberry = new Fruit('strawberry',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 7, lipids: 0.5, proteins: 0.7 }, 25, 40, 6);

const lemon = new Fruit('lemon',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 9, lipids: 0.4, proteins: 0.7 }, 25, 44, 6);

//  Dairy

const manchego = new DairyProduct('manchego',
  { country: 'Spain', city: 'La Mancha' },
  { carbs: 0.42, lipids: 33.54, proteins: 26.01 }, 50, 408, 34.90);

const iceCream = new DairyProduct('ice cream',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 28.2, lipids: 11, proteins: 3.8 }, 50, 216, 11.80);

const kefir = new DairyProduct('kefir',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 4.8, lipids: 3.5, proteins: 3.3 }, 50, 64, 1);

const heavyCream = new DairyProduct('heavyCream',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 2, lipids: 48.2, proteins: 1.5 }, 25, 448, 2);

const brie = new DairyProduct('brie',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 0.1, lipids: 26.9, proteins: 19.3 }, 25, 320, 8);

//  Vegetables

const spinach = new Vegetables('spinach',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 3.63, lipids: 0.39, proteins: 2.89 }, 50, 23, 1.19);

const arugula = new Vegetables('arugula',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 3.65, lipids: 0.66, proteins: 2.58 }, 50, 25, 1.49);

const asparagus = new Vegetables('asparagus',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 3.88, lipids: 0.12, proteins: 2.2 }, 50, 20, 8.60);

const garlic = new Vegetables('garlic',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 23, lipids: 0.3, proteins: 5.3 }, 50, 118, 2);

const onion = new Vegetables('onion',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 7, lipids: 0, proteins: 1.2 }, 50, 33, 1);

const lettuce = new Vegetables('lettuce',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 0.1, lipids: 0.2, proteins: 1.34 }, 50, 14, 1.49);

const broccoli = new Vegetables('broccoli',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 1.8, lipids: 0.9, proteins: 4.4 }, 50, 38, 1.49);

//  Meat

const steak = new Meat('ribeye',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 0, lipids: 8.95, proteins: 19.62 }, 250, 165, 19.99);

const bacon = new Meat('bacon',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 0.5, lipids: 26.1, proteins: 16 }, 50, 301, 6);

const chicken = new Meat('chicken',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 0, lipids: 9.7, proteins: 20 }, 50, 167, 6);

const porkTenderloin = new Meat('pork tenderloin',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 0, lipids: 5.1, proteins: 21 }, 50, 130, 6);

const beefChop = new Meat('beef chop',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 0, lipids: 20.5, proteins: 17 }, 50, 253, 6);

//  Seeds

const whiteRice = new Seed('white rice',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 86, lipids: 0.9, proteins: 7 }, 50, 381, 1);

const brownRice = new Seed('brown rice',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 73, lipids: 2.2, proteins: 8 }, 50, 351, 1.5);

const almond = new Seed('almond',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 6.6, lipids: 56.7, proteins: 21.2 }, 50, 648, 12);

const nuts = new Seed('nuts',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 3.3, lipids: 59, proteins: 14 }, 50, 611, 13);

const sesameSeeds = new Seed('sesame seeds',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 0.9, lipids: 58, proteins: 18.2 }, 50, 614, 8);

//  Fish

const anchovies = new Fish('anchovies',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 0, lipids: 6.3, proteins: 17.6 }, 25, 127, 30);

const tuna = new Fish('tuna',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 0, lipids: 12, proteins: 23 }, 50, 200, 1.5);

const bonito = new Fish('bonito',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 0, lipids: 6, proteins: 21 }, 50, 138, 12);

const caviar = new Fish('caviar',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 4, lipids: 17.9, proteins: 25 }, 50, 277, 50);

const hake = new Fish('hake',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 0, lipids: 2.8, proteins: 15.9 }, 50, 89, 8);

//  Egg products

const eggWhite = new EggProduct('egg white',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 0.5, lipids: 0.2, proteins: 11 }, 50, 48, 5);

const chickenEgg = new EggProduct('chicken egg',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 0.7, lipids: 11.1, proteins: 12.5 }, 50, 153, 3);

const eggYolk = new EggProduct('egg yolk',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 0.2, lipids: 33, proteins: 16 }, 50, 362, 3);

//  Legumes

const chickpea = new Legume('chickpea',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 49.6, lipids: 5.4, proteins: 21.3 }, 50, 332, 5);

const pea = new Legume('pea',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 13.1, lipids: 0.5, proteins: 6 }, 50, 91, 5);

const blackBeans = new Legume('black bean',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 13.1, lipids: 0.5, proteins: 24.9 }, 50, 275, 5);

const lentil = new Legume('lentil',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 48.8, lipids: 1.9, proteins: 24.3 }, 50, 310, 5);

const whiteBeans = new Legume('white beans',
  { country: 'Spain', city: 'La Victoria' },
  { carbs: 49.7, lipids: 1.6, proteins: 21.4 }, 50, 299, 5);

// Available plates
//  Entree

const hummus = new Plate('hummus', [chickpea, lemon], 'entree');
const meatNCheese = new Plate('meat and cheese tray',
  [steak, brie], 'entree');
const spinachDip = new Plate('spinach dip',
  [spinach, heavyCream, eggYolk], 'entree');
const riceCaviar = new Plate('rice and caviar',
  [whiteRice, caviar], 'entree');
const brownRiceAnchovies = new Plate('brown rice and anchovies',
  [brownRice, anchovies], 'entree');

//  First dishes
const manchegoSalad = new Plate('manchego salad',
  [apple, manchego, spinach, arugula], 'first');
const brieSalad = new Plate('brie salad',
  [apple, brie, spinach, arugula], 'first');
const chickenSalad = new Plate('chicken salad',
  [apple, chicken, spinach, arugula], 'first');
const baconSalad = new Plate('bacon salad',
  [apple, bacon, spinach, arugula], 'first');

//  Second dishes

const steakNAsparagus =
  new Plate('steak and roasted asparagus',
    [steak, asparagus], 'second');
const hakeNRice =
  new Plate('hake and rice',
    [hake, whiteRice, garlic], 'second');

//  Desserts

const bananaSplit = new Plate('banana split',
  [iceCream, banana], 'dessert');

//  Menus

const menuInstance1 = new Menu('testMenu1',
  [manchegoSalad, steakNAsparagus, bananaSplit]);

const menuInstance2 = new Menu('testMenu2',
  [steakNAsparagus, manchegoSalad, manchegoSalad, bananaSplit]);

const carteInstance = new Carte([menuInstance1, menuInstance2]);