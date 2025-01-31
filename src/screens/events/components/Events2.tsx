import { type FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../styles/Colors.ts';

interface EventsTiltFourProps {}

const Events2: FC<EventsTiltFourProps> = (): React.JSX.Element => {
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
          Крафтовый Пивной Фест
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
            backgroundColor: Colors.background,
            fontSize: 16,
            color: Colors.white,
            fontWeight: '800',
          }}
        >
          30 ктября 2024
        </Text>
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 20, position: 'absolute', bottom: 100, backgroundColor: Colors.redButton, paddingVertical: 20, }}>
        <Text
          style={{
            paddingHorizontal: 20,
            fontSize: 16,
            textAlign: 'center',
            color: Colors.white,
            fontWeight: '500',
          }}
        >
          Откройте для себя мир местного крафтового пива в сочетании с идеально подходящими к нему бургерами!
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
export default Events2;
