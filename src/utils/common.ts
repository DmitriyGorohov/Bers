import Screens from '../navigation/consts/screens.ts';

export const myBookMainList = [
  { id: 1, value: 'ГЛАВНАЯ', screen: Screens.MENU },
  { id: 2, value: 'КОРЗИНА', screen: Screens.BASKET },
  { id: 3, value: 'ТРАНСЛЯЦИИ', screen: Screens.BROADCAST },
  { id: 4, value: 'КОНТАКТЫ', screen: Screens.CONTACTS },
  { id: 5, value: 'РЕЗЕРВ СТОЛИКА', screen: Screens.RESERVE },
  { id: 6, value: 'СОБЫТИЯ', screen: Screens.EVENTS },
];

export const myBookEventsList = [
  { id: 1, value: 'Бургер Битва', time: '25 июня 2024' },
  { id: 2, value: 'Международный Бургер Фестиваль ', time: '13 мая 2024' },
  { id: 3, value: 'Бургерный Фестиваль Фильмов', time: '5 сентебря 2024' },
  { id: 4, value: 'Крафтовый Пивной Фест', time: '22 агуста 2024' },
  { id: 5, value: 'Футбольный Финал Фест', time: '31 января 2024' },
];
