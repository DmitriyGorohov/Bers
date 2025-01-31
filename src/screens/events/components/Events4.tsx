import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import Colors from '../../../styles/Colors.ts';

interface EventsTiltTreeProps {}

const Events4: FC<EventsTiltTreeProps> = (): React.JSX.Element => {
  return (
    <View
      style={{
        position: 'absolute',
        top: '40%',
        alignSelf: 'center',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 42,
          color: Colors.redButton,
          fontWeight: '900',
          marginBottom: 12,
        }}
      >
        {'Бургерный\nФестиваль\nФильмов'}
      </Text>
      <Text
        style={{
          paddingHorizontal: 20,
          marginTop: 16,
          textAlign: 'center',
          fontSize: 16,
          color: Colors.white,
        }}
      >
        Двухдневный фестиваль с участием местных кондитеров и их лучших
        десертов. Посетители смогут не только насладиться разнообразными
        сладостями, но и участвовать в весёлых конкурсах и розыгрышах. Идеальное
        мероприятие для семей и друзей!
      </Text>
      <Text
        style={{
          padding: 10,
          marginHorizontal: 100,
          borderRadius: 100,
          backgroundColor: Colors.redButton,
          textAlign: 'center',
          fontWeight: '500',
          fontSize: 16,
          color: Colors.white,
        }}
      >
        10 мая 2024
      </Text>
    </View>
  );
};
export default Events4;
