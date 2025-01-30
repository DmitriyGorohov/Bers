import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import Colors from '../../../styles/Colors.ts';

interface EventsTiltTwoProps {}

const EventsMyBookTwo: FC<EventsTiltTwoProps> = (): React.JSX.Element => {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          top: 150,
          alignItems: 'center',
          width: '100%',
          paddingVertical: 22,
          justifyContent: 'space-between',
          paddingHorizontal: 16,
        }}
      >
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              color: Colors.black,
              fontWeight: '800',
            }}
          >
            Вечер поэзии и десертов "Сладкие стихи"
          </Text>
          <View
            style={{
              marginBottom: -20,
              zIndex: 999,
              borderRadius: 100,
              paddingVertical: 6,
              backgroundColor: Colors.redButton,
              alignSelf: 'center',
              paddingHorizontal: 16,
            }}
          >
            <Text
              style={{
                textAlign: 'right',
                fontWeight: '800',
                fontSize: 18,
                color: Colors.white,
              }}
            >
              5 декабря, с 18:00 до 21:00
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Colors.white,
              borderRadius: 20,
              paddingHorizontal: 16,
              paddingVertical: 20,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                color: Colors.black,
              }}
            >
              Совместите любовь к сладостям и искусству на нашем поэтическом
              вечере. Приглашаем местных поэтов и всех желающих поделиться
              своими творениями. Насладитесь атмосферой творчества и вкусных
              десертов.
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};
export default EventsMyBookTwo;
