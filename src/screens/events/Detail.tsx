import {
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { IconComponent } from '../../components/icon/IconComponent.tsx';
import Colors from '../../styles/Colors.ts';
import Navigation from '../../navigation/navigation.ts';
import { useRoute } from '@react-navigation/native';
import { EventDetailsRouteProps } from '../../types/stacks/MainStacksTypeMyBook.ts';
import { IconTypes } from '../../components/icon/icons';
import Events3 from './components/Events3.tsx';
import Events5 from './components/Events5.tsx';
import Events4 from './components/Events4.tsx';
import Events2 from './components/Events2.tsx';
import Events1 from './components/Events1.tsx';

const Detail = (): React.JSX.Element => {
  const {
    params: { iconName },
  } = useRoute<EventDetailsRouteProps>();

  const renderView = (): React.JSX.Element => {
    switch (iconName) {
      case 'events1':
        return <Events3 />
      case 'events2':
        return <Events5 />
      case 'events3':
        return <Events4 />
      case 'events4':
        return <Events2 />
      case 'events5':
        return <Events1 />
      default:
        return <View />;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => Navigation.pop()}
        activeOpacity={1}
        style={{
          position: 'absolute',
          zIndex: 999,
          top: 0,
          width: '100%',
          height: 100,
          backgroundColor: Colors.background,
        }}
      >
        <IconComponent
          style={{ width: 70, height: 40, marginTop: 50, marginLeft: 20, resizeMode: 'contain' }}
          icon={'backBersEvents'}
        />
      </TouchableOpacity>
      <IconComponent
        style={{
          width: Dimensions.get('window').width,
          height:
            Platform.OS === 'ios'
              ? Dimensions.get('window').height
              : Dimensions.get('window').height + 50,
          marginTop: 25,
        }}
        icon={iconName as IconTypes}
      />
      {renderView()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
export default Detail;
