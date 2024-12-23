import {StatusBar,Image, StyleSheet, Text} from 'react-native';
import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './Screens/AuthFlow/SplashScreen';
import OnBoardingScreen from './Screens/AuthFlow/OnBoardingScreen';
import LoginScreen from './Screens/AuthFlow/LoginScreen';
import RegisterScreen from './Screens/AuthFlow/RegisterScreen';
import OtpScreen from './Screens/AuthFlow/OtpScreen';
import Home from './Screens/Home/Home';
import MyMatchesScreen from './Screens/MyMatches/MyMatchesScreen';
import WinnersScreen from './Screens/WinnersModule/WinnersScreen';
import RewardsScreen from './Screens/RewardsModule/RewardsScreen';
import ChatScreen from './Screens/ChatModule/ChatScreen';
import ContestScreen from './Screens/ContestTabScreens/ContestScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileBaseScreen from './Screens/Profile/ProfileBaseScreen';
import CustomDrawerContent from './Screens/CustomDrawerComponent';
import TeamCreation from './Screens/TeamCreationModule/TeamCreation';
import Preview from './Screens/TeamCreationModule/Preview';
import Notification from './Screens/Notification/Notification';
import useAuthStore from './store/useGeneralState';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import Toast  from 'react-native-toast-message'

type StackParamList = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  OtpScreen: {data: string};
  OnBoardingScreen: undefined;
  RegisterScreen: undefined;
  Home: undefined;
  ContestScreen: undefined;
  TeamCreation: undefined;
  Preview: undefined;
  Notification: undefined;
};

const Stack = createStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerType: 'front'}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeTabNavigator}
        options={{
          drawerIcon: ({color, size}) => (
            <Image
              source={require('./Screens/assets/MyMatchesLogo.png')}
              style={styles.tabIcon}
            />
          ),
          drawerLabel: ({focused, color}) => (
            <Text style={{color: color}}>DEFAULT PROFILE</Text>
          ),
        }}
      />
      <Drawer.Screen name="ProfileBaseScreen" component={ProfileBaseScreen} />
    </Drawer.Navigator>
  );
}

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveBackgroundColor: 'white',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./Screens/assets/Home.png')}
              style={[
                styles.tabIcon,
                {tintColor: color, width: size, height: size},
              ]}
            />
          ),
        }}
      />

      <Tab.Screen
        name="MyMatches"
        component={MyMatchesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./Screens/assets/MyMatchesLogo.png')}
              style={[
                styles.tabIcon,
                {tintColor: color, width: size, height: size},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={RewardsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./Screens/assets/Rewards.png')}
              style={[
                styles.tabIcon,
                {tintColor: color, width: size, height: size},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./Screens/assets/Chat.png')}
              style={[
                styles.tabIcon,
                {tintColor: color, width: size, height: size},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Winner"
        component={WinnersScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./Screens/assets/ReawrdsLogo.png')}
              style={[
                styles.tabIcon,
                {tintColor: color, width: size, height: size},
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

  const App:React.FC = () => {
    const {isSignedIn} = useAuthStore();

    return (
      <ApolloProvider client={client}>
       <NavigationContainer>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <Stack.Navigator initialRouteName={isSignedIn ? 'Home' : 'SplashScreen'}>
                <Stack.Screen
                  name="SplashScreen"
                  component={SplashScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="OnBoardingScreen"
                  component={OnBoardingScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="LoginScreen"
                  component={LoginScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="RegisterScreen"
                  component={RegisterScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="OtpScreen"
                  component={OtpScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Home"
                  component={DrawerNavigator}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ContestScreen"
                  component={ContestScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="TeamCreation"
                  component={TeamCreation}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Preview"
                  component={Preview}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Notification"
                  component={Notification}
                  options={{ headerShown: false }}
                />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
       
    );
  };
  
  export default App;
  

const styles = StyleSheet.create({
  tabIcon: {
    height: 20,
    width: 20,
  },
});
