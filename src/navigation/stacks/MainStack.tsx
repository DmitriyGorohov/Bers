import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Screens from '../consts/screens.ts';
import MainScreenMyBook from '../../screens/MainScreenMyBook.tsx';
import MenuBers from '../../screens/menu/MenuBers.tsx';
import Cart from '../../screens/basket/Cart.tsx';
import CartSuccess from '../../screens/basket/CartSuccess.tsx';
import ReservBers from '../../screens/reserve/ReservBers.tsx';
import ReservSBers from '../../screens/reserve/ReservSBers.tsx';
import Contacts from '../../screens/contacts/Contacts.tsx';
import Translation from '../../screens/broadcast/Translation.tsx';
import Events from '../../screens/events/Events.tsx';
import Detail from '../../screens/events/Detail.tsx';

const Stack = createStackNavigator();

const MainStack = (): React.JSX.Element => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Screens.MAIN_APP} component={MainScreenMyBook} />
        <Stack.Screen name={Screens.MENU} component={MenuBers} />
        <Stack.Screen name={Screens.BASKET} component={Cart} />
        <Stack.Screen name={Screens.BASKET_SUCCESS} component={CartSuccess} />
        <Stack.Screen name={Screens.RESERVE} component={ReservBers} />
        <Stack.Screen name={Screens.RESERVE_SUCCESS} component={ReservSBers} />
        <Stack.Screen name={Screens.CONTACTS} component={Contacts} />
        <Stack.Screen name={Screens.BROADCAST} component={Translation} />
        <Stack.Screen name={Screens.EVENTS} component={Events} />
        <Stack.Screen name={Screens.EVENTS_DETAIL} component={Detail} />
    </Stack.Navigator>
);
export default MainStack;
