import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

interface HeaderComponentProps {
  onPress: () => void;
}
const HeaderComponent: React.FC<HeaderComponentProps> = ({onPress}) => {
  const navigation = useNavigation();
  const navigateToNotification = () => {
    navigation.navigate('Notification');
  };
  return (
    <View style={styles.headerContainer}>
      {/* <TouchableOpacity onPress={navigation.dispatch(DrawerActions.openDrawer())}> */}
      <TouchableOpacity onPress={onPress}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../Screens/assets/Profile.png')}
            style={styles.iconContainer}
          />
        </View>
      </TouchableOpacity>

      <Image
        source={require('../Screens/assets/WhiteLogo.png')}
        style={styles.logoIconContainer}
      />
      <View style={styles.secondIconContainer}>
        <TouchableOpacity onPress={navigateToNotification}>
          <Image
            source={require('../Screens/assets/Notification.png')}
            style={styles.notificationIconConatiner}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../Screens/assets/Wallet.png')}
            style={styles.WalletIconConatiner}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    paddingTop:30,
  },
  iconContainer: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  logoContainer: {
    flexDirection: 'row',
  },
  logoIconContainer: {
    width: 130,
    height: 35,
  },
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  notificationIconConatiner: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginRight: 20,
  },
  WalletIconConatiner: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  secondIconContainer: {
    flexDirection: 'row',
  },
});
