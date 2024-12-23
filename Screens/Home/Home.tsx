import {SafeAreaView,StyleSheet,View,} from 'react-native';
import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {DrawerActions,useNavigation,} from '@react-navigation/native';
import CricketScreen from '../SportScreens/CricketScreen';
import FootBallScreen from '../SportScreens/FootBallScreen';
import BasketBallScreen from '../SportScreens/BasketBallScreen';
import HeaderComponent from '../../Component/HeaderComponent';


const Tab = createMaterialTopTabNavigator();


const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation(); 


  const navigateToDrawerScreen = () => {
    navigation.dispatch(DrawerActions.openDrawer);
  };

  return (
      <SafeAreaView style={styles.safeAreaViewContainer}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <HeaderComponent onPress={navigateToDrawerScreen} />
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
            <Tab.Screen name="Cricket" component={CricketScreen} />
            <Tab.Screen name="FootBall" component={FootBallScreen} />
            <Tab.Screen name="Basketball" component={BasketBallScreen} />
          </Tab.Navigator>
        </View>
      </SafeAreaView>
  );
};

export default Home;

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
