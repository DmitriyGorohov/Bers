import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import Colors from '../../../styles/Colors.ts';

interface EventsTiltOneProps {}

const Events3: FC<EventsTiltOneProps> = (): React.JSX.Element => {
  return (
    <View style={{ position: 'absolute', top: 150 }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 52,
          color: Colors.white,
          fontWeight: '900',
        }}
      >
        {'Бургер\nбитва'}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '800',
          fontSize: 22,
          padding: 10,
          marginHorizontal: 50,
          borderRadius: 20,
          backgroundColor: Colors.white,
          color: Colors.black,
        }}
      >
        {'15 июня 2024'}
      </Text>
      <Text
        style={{
          padding: 10,
          backgroundColor: Colors.redButton,
          textAlign: 'center',
          paddingHorizontal: 50,
          fontSize: 18,
          color: Colors.white,
          marginTop: 20,
        }}
      >
        {'Участвуйте в захватывающем соревновании за звание лучшего бургера. Отведайте уникальные гастрономические шедевры и голосуйте за своего фаворита.'}
      </Text>
    </View>
  );
};
export default Events3;
