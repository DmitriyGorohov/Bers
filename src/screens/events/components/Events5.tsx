import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import Colors from '../../../styles/Colors.ts';

interface EventsTiltTwoProps {}

const Events5: FC<EventsTiltTwoProps> = (): React.JSX.Element => {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          bottom: 50,
          alignItems: 'center',
          width: '100%',
          paddingVertical: 22,
          justifyContent: 'space-between',
          paddingHorizontal: 16,
        }}
      >
        <View>
          <View
            style={{
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
              13 мая 2024
            </Text>
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              marginVertical: 20,
              borderWidth: 2,
              padding: 16,
              backgroundColor: Colors.white,
              borderRadius: 30,
              color: Colors.redButton,
              fontWeight: '800',
            }}
          >
            Международный Бургер Фестиваль
          </Text>

            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: '800',
                color: Colors.black,
              }}
            >
              Каждый бургер — это отдельная история и уникальное сочетание вкусов. Погрузитесь в мир интернациональной кулинарии без покидания города!
            </Text>
        </View>
      </View>
    </>
  );
};
export default Events5;
