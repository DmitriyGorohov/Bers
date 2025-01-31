import { type FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../styles/Colors.ts';

interface EventsTiltFiveProps {}

const Events1: FC<EventsTiltFiveProps> = (): React.JSX.Element => {
  return (
    <>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 34,
            padding: 8,
            borderRadius: 100,
            textAlign: 'right',
            color: Colors.white,
            fontWeight: '800',
          }}
        >
          {'Спортивный День\nв бургерной'}
        </Text>
        <Text
          style={{
            textAlign: 'right',
            fontSize: 20,
            color: Colors.white,
            fontWeight: '900',
          }}
        >
          10 июля 2024
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 100,
          alignSelf: 'center',
          backgroundColor: Colors.redButton,
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            paddingHorizontal: 20,
            fontSize: 20,
            textAlign: 'center',
            color: Colors.white,
            fontWeight: '900',
          }}
        >
          Вас ждут специальные акции и скидки на наши бургеры и напитки!{' '}
        </Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    right: 0,
    paddingHorizontal: 20,
    position: 'absolute',
    top: 200,
  },
});
export default Events1;
