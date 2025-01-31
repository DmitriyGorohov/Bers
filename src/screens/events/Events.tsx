import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../styles/Colors.ts';
import Header from '../../components/Header.tsx';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconComponent } from '../../components/icon/IconComponent.tsx';
import { myBookEventsList } from '../../utils/common.ts';
import Screens from '../../navigation/consts/screens.ts';
import Navigation from '../../navigation/navigation.ts';
import { IconTypes } from '../../components/icon/icons';

const Events = (): React.JSX.Element => {
  const handleSwitchIconName = (id: number): IconTypes => {
    switch (id) {
      case 1:
        return 'events1';
      case 2:
        return 'events2';
      case 3:
        return 'events3';
      case 4:
        return 'events4';
      case 5:
        return 'events5';
      default:
        return 'events1';
    }
  };

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header isCenter={false} />
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.background,
          paddingHorizontal: 16,
        }}
      >
        <IconComponent
          style={{ width: 250, height: 100, marginBottom: 20, alignSelf: 'center' }}
          icon="logoBers"
        />
        <View
          style={{
            paddingHorizontal: 16,
            flex: 1,
            backgroundColor: Colors.background,
          }}
        >
          {myBookEventsList.map((item) => (
            <>
              <Text style={{ color: Colors.white, textAlign: 'right', paddingHorizontal: 20, marginBottom: 4, fontSize: 16 }}>{item.time}</Text>
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  Navigation.navigate(Screens.EVENTS_DETAIL, {
                    iconName: handleSwitchIconName(item.id),
                  })
                }
                activeOpacity={0.8}
                style={styles.item}
              >
                <Text
                  style={{ textAlign: 'center', color: Colors.redButton, fontSize: 22, fontWeight: '800' }}
                >
                  {item.value}
                </Text>
              </TouchableOpacity>
            </>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  containerE: {
    zIndex: 999,
    backgroundColor: Colors.white,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  item: {
    borderWidth: 2,
    marginBottom: 10,
    borderColor: Colors.redButton,
    backgroundColor: Colors.white,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },
});
export default Events;
