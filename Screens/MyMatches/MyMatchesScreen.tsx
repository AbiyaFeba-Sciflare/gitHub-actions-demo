import {
  StatusBar,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  DrawerActions,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import Upcoming from './MatchListScreen/Upcoming';
import Live from './MatchListScreen/Live';
import Completed from './MatchListScreen/Completed';
import HeaderComponent from '../../Component/HeaderComponent';
import MyMatchesCricketScreen from './MyMatchesCricketScreen';
import MyMatchesFootBallScreen from './MyMatchesFootBallScreen';
import MyMatchesBasketBallScreen from './MyMatchesBasketBallScreen';

const Tab = createMaterialTopTabNavigator();

const MyMatchesScreen = () => {
  const navigation = useNavigation();
  const openDrawerScreen = () => {
    navigation.dispatch(DrawerActions.openDrawer);
  };
  return (
    <>
      <StatusBar backgroundColor="red" barStyle="light-content" />
      <SafeAreaView style={styles.safeAreaViewContainer}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <HeaderComponent onPress={openDrawerScreen} />
          </View>
          <Tab.Navigator
            screenOptions={{
              swipeEnabled: false,
              tabBarIndicatorStyle: {backgroundColor: 'white'},
              tabBarLabelStyle: {
                fontSize: 15,
                color: 'white',
                fontWeight: 'bold',
              },
              tabBarStyle: {backgroundColor: 'red'},
            }}>
            <Tab.Screen name="Cricket" component={MyMatchesCricketScreen} />
            <Tab.Screen name="FootBall" component={MyMatchesFootBallScreen} />
            <Tab.Screen
              name="BasketBall"
              component={MyMatchesBasketBallScreen}
            />
          </Tab.Navigator>
        </View>
      </SafeAreaView>
    </>
  );
};

export default MyMatchesScreen;

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    backgroundColor: 'red',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  headerContainer: {
    backgroundColor: 'red',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
  },
  iconContainer: {
    width: 35,
    height: 35,
    // margin:10,
    // marginVertical:15,
  },

  headerText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  notificationIconConatiner: {
    height: 25,
    width: 20,
  },
  WalletIconConatiner: {
    height: 25,
    width: 25,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabNavigatorContainer: {
    backgroundColor: 'red',
  },
});
