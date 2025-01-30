import { type FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../styles/Colors.ts';

interface EventsTiltFiveProps {}

const EventsMyBookFive: FC<EventsTiltFiveProps> = (): React.JSX.Element => {
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
          {'В мире\nфутбола'}
        </Text>
        <Text
          style={{
            // width: '60%',
            textAlign: 'right',
            fontSize: 20,
            color: Colors.white,
            fontWeight: '300',
          }}
        >
          {'10 января,\nс 10:00 до 16:00'}
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 100,
          marginHorizontal: 20,
          alignSelf: 'center',
          backgroundColor: Colors.transparent,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: Colors.redButton,
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
          Предлагаем уникальную возможность посмотреть, ваши любимые матчи!
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
export default EventsMyBookFive;
