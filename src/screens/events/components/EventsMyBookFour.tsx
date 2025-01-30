import { type FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../styles/Colors.ts';

interface EventsTiltFourProps {}

const EventsMyBookFour: FC<EventsTiltFourProps> = (): React.JSX.Element => {
  return (
    <>
      <View style={styles.container}>
        <Text
          style={{
            paddingHorizontal: 20,
            fontSize: 32,
            textAlign: 'center',
            color: Colors.white,
            fontWeight: '900',
          }}
        >
          Футбольные угощения
        </Text>
        <Text
          style={{
            textAlign: 'center',
            padding: 10,
            borderRadius: 100,
            borderWidth: 1,
            marginTop: 20,
            alignSelf: 'center',
            borderColor: Colors.white,
            fontSize: 16,
            color: Colors.white,
            fontWeight: '800',
          }}
        >
          7 декабря, с 19:00 до 23:00
        </Text>
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 20, position: 'absolute', bottom: 100, backgroundColor: Colors.black, paddingVertical: 20, }}>
        <Text
          style={{
            paddingHorizontal: 20,
            fontSize: 16,
            textAlign: 'center',
            color: Colors.white,
            fontWeight: '500',
          }}
        >
          Совместите просмотр классических фильмов с нашими фирменными
          десертами.Каждый фильм будет сопровождаться специально подобранным
          десертом, который отражает его атмосферу или тематику. Отличный способ
          провести вечер в компании друзей!
        </Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 200,
  },
});
export default EventsMyBookFour;
