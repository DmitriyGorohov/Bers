import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import Colors from '../../../styles/Colors.ts';

interface EventsTiltTreeProps {}

const EventsMyBookTree: FC<EventsTiltTreeProps> = (): React.JSX.Element => {
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
          fontSize: 32,
          color: Colors.white,
          fontWeight: '900',
          marginBottom: 12,
        }}
      >
        Фестиваль "Вкусный уикенд"
      </Text>
      <Text
        style={{
          padding: 10,
          backgroundColor: Colors.redButton,
          textAlign: 'center',
          fontWeight: '500',
          fontSize: 16,
          color: Colors.white,
        }}
      >
        15-16 января, с 12:00 до 20:00 каждый день
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
    </View>
  );
};
export default EventsMyBookTree;
