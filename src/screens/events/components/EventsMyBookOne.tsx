import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import Colors from '../../../styles/Colors.ts';

interface EventsTiltOneProps {}

const EventsMyBookOne: FC<EventsTiltOneProps> = (): React.JSX.Element => {
  return (
    <View style={{ position: 'absolute', top: 150 }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 32,
          color: Colors.white,
          fontWeight: '900',
        }}
      >
        {'Мастер-класс по украшению тортов "Сладкая фантазия"'}
      </Text>
      <Text
        style={{
          padding: 10,
          backgroundColor: Colors.redButton,
          textAlign: 'center',
          fontWeight: '800',
          fontSize: 22,
          color: Colors.white,
        }}
      >
        {'10 декабря, с 15:00 до 18:00.'}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          paddingHorizontal: 50,
          fontSize: 18,
          color: Colors.white,
          marginTop: 20,
        }}
      >
        {'Приглашаем всех желающих на мастер-класс по украшению тортов. Научитесь создавать уникальные и вкусные украшения под руководством нашего кондитера. Приведите друзей и семью для творческого и вкусного вечера!'}
      </Text>
    </View>
  );
};
export default EventsMyBookOne;
