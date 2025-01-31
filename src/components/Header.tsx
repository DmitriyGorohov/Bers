import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { IconComponent } from './icon/IconComponent.tsx';
import Navigation from '../navigation/navigation.ts';
import Screens from '../navigation/consts/screens.ts';
import Colors from '../styles/Colors.ts';

interface HeaderProps {
  isCenter?: boolean;
}

const Header = ({ isCenter = true }: HeaderProps): React.JSX.Element => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => Navigation.pop()} activeOpacity={0.8}>
      <IconComponent style={{ width: 30, height: 30 }} icon={'burgerMenu'} />
    </TouchableOpacity>
    {isCenter && <IconComponent style={{ width: 100, height: 30 }} icon={'logoBersHeader'} />}
    <TouchableOpacity
      onPress={() => Navigation.navigate(Screens.BASKET)}
      activeOpacity={0.8}
    >
      <IconComponent style={{ width: 30, height: 30 }} icon={'karzinaHeader'} />
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: Colors.background,
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 32,
  },
});
export default Header;
