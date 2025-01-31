import { type FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../styles/Colors.ts';
import { IconComponent } from '../components/icon/IconComponent.tsx';
import { myBookMainList } from '../utils/common.ts';
import Screens from '../navigation/consts/screens.ts';
import Navigation from '../navigation/navigation.ts';
import {SafeAreaView} from 'react-native-safe-area-context';

interface MainScreenProps {}

const MainScreenMyBook: FC<MainScreenProps> = (): React.JSX.Element => {
  const handleNavigate = (screen: Screens) => {
    Navigation.navigate(screen);
  };
  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: Colors.background, flex: 1, paddingHorizontal: 40, }}>
      <View style={styles.container}>
        <IconComponent style={{ width: 320, height: 150 }} icon="logoBers" />
      </View>
      <View style={{ paddingHorizontal: 16, marginBottom: 34, paddingTop: 12 }}>
        {myBookMainList.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => handleNavigate(item.screen)}
              key={item.id}
              activeOpacity={0.8}
              style={[
                styles.item,
              ]}
            >
              <Text
                style={{ color: Colors.white, fontSize: 18, fontWeight: '800' }}
              >
                {item.value}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        onPress={() => handleNavigate(Screens.BASKET)}
        activeOpacity={0.8}
        style={{ alignSelf: 'center' }}
      >
        <IconComponent style={{ width: 50, height: 50 }} icon="karzina" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    borderWidth: 3,
    marginBottom: 10,
    borderColor: Colors.redButton,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },
});
export default MainScreenMyBook;
