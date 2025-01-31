import { ImageRequireSource } from 'react-native';

export interface Product {
  id: number; // Уникальный идентификатор
  name: string; // Название продукта
  image: ImageRequireSource; // Описание продукта
  price: number; // Цена продукта
  category: string; // Категория
  description: string;
}

export const burders: Product[] = [
  {
    id: 1,
    name: 'Чизбургер',
    image: require('../assets/burger-1.png'),
    price: 15,
    category: 'Напитки',
    description: 'сочная говяжья котлета с расплавленным сыром чеддер, маринованными огурчиками, кетчупом и горчицей на булочке с кунжутом.',
  },
  {
    id: 2,
    name: 'Бургер с беконом',
    image: require('../assets/burger-2.png'),
    price: 10,
    category: 'Напитки',
    description:
      'говяжья котлета, хрустящий бекон, свежий салат, помидоры, красный лук и майонез на пшеничной булочке.',
  },
  {
    id: 3,
    name: 'Двойной бургер',
    image: require('../assets/burger-3.png'),
    price: 10,
    category: 'Напитки',
    description: 'две говяжьи котлеты с двойным сыром чеддер, красным луком, свежими помидорами и соусом барбекю.',
  },
  {
    id: 4,
    name: 'Спайси бургер',
    image: require('../assets/burger-4.png'),
    price: 20,
    category: 'Напитки',
    description:
      'острый говяжий бургер с жареным чили, острым сыром пепперджек, листьями салата и соусом чипотле.',
  },
];

export const social: Product[] = [
  {
    id: 5,
    name: 'Гурмэ-бургер ',
    description: 'мраморная говядина, блу чиз, карамелизированная груша, руккола и малиновый соус на бриочной булочке.',
    price: 50,
    category: 'Фруктовые торты',
    image: require('../assets/social-1.png'),
  },
  {
    id: 6,
    name: 'Терияки бургер ',
    description: 'куриная котлета в соусе терияки с ананасом, свежим огурцом и соусом васаби-майо.',
    price: 40,
    category: 'Фруктовые торты',
    image: require('../assets/social-2.png'),
  },
  {
    id: 7,
    name: 'Лососевый бургер',
    description: 'стейк из лосося с авокадо, маринованным имбирем, водорослями нори и кремом из васаби.',
    price: 35,
    category: 'Фруктовые торты',
    image: require('../assets/social-3.png'),
  },
  {
    id: 8,
    name: 'Креветочный бургер',
    description: ' жареные креветки с манго-сальсой, свежим салатом и соусом айоли.',
    price: 45,
    category: 'Фруктовые торты',
    image: require('../assets/social-4.png'),
  },
];

export const buter: Product[] = [
  {
    id: 9,
    name: 'Клубный сэндвич',
    description: 'тост с куриной грудкой, беконом, помидорами, салатом и майонезом.',
    price: 20,
    category: 'Классические торты',
    image: require('../assets/buter-1.png'),
  },
  {
    id: 10,
    name: 'Сэндвич с ростбифом',
    description: 'ростбиф на ржаном хлебе с хреном, карамелизированным луком и зеленью.',
    price: 20,
    category: 'Классические торты',
    image: require('../assets/buter-2.png'),
  },
  {
    id: 11,
    name: 'Сэндвич с лососем',
    description: 'копченый лосось на цельнозерновом хлебе с сыром крем фреш, укропом и лимоном.',
    price: 55,
    category: 'Классические торты',
    image: require('../assets/buter-3.png'),
  },
  {
    id: 12,
    name: 'Вегетарианский врап',
    description: 'цельнозерновая лепешка с гриллированными овощами, фетой и песто.',
    price: 45,
    category: 'Классические торты',
    image: require('../assets/buter-4.png'),
  },
];

export const sendvich: Product[] = [
  {
    id: 13,
    name: 'Картофель фри',
    description: ' кольца лука в кляре, обжаренные до золотистой корочки, подаются с соусом ранч.',
    price: 10,
    category: 'Десерты и сладости',
    image: require('../assets/sendvich-1.png'),
  },
  {
    id: 14,
    name: 'Картофельные дольки',
    description: ' маринованные и жаренные крылышки с соусом барбекю или буффало.',
    price: 15,
    category: 'Десерты и сладости',
    image: require('../assets/sendvich-2.png'),
  },
  {
    id: 15,
    name: 'Онион рингс',
    description: ' кольца лука в кляре, обжаренные до золотистой корочки, подаются с соусом ранч.',
    price: 20,
    category: 'Десерты и сладости',
    image: require('../assets/sendvich-3.png'),
  },
  {
    id: 16,
    name: 'Куриные крылышки',
    description: ' маринованные и жаренные крылышки с соусом барбекю или буффало.',
    price: 45,
    category: 'Десерты и сладости',
    image: require('../assets/sendvich-4.png'),
  },
];
