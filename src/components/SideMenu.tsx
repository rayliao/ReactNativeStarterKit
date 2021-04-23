import React from 'react';
import {Text, View} from 'react-native';

interface SideMenuProps {}

class SideMenu extends React.Component<SideMenuProps, any> {
  static options() {
    return {
      topBar: {
        leftButtons: {
          id: 'sideMenu',
          // icon: require('./menuIcon.png'),
        },
      },
    };
  }

  render() {
    return (
      <View>
        <Text>Click the hamburger icon to open the side menu</Text>
      </View>
    );
  }
}

export default SideMenu;
