import {StyleSheet} from 'react-native';
import React from 'react';
import Contests from '../Screens/ContestTabScreens/Contests';
import MyContest from '../Screens/ContestTabScreens/MyContest';
import MyTeams from '../Screens/ContestTabScreens/MyTeams';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const CustomContestTabView = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={{
      swipeEnabled: false,
      tabBarIndicatorStyle: {backgroundColor: 'red'},
      tabBarLabelStyle: {
        fontSize: 15,
        color: 'red',
        fontWeight: 'bold',
      },
      tabBarStyle: {backgroundColor: 'white'},
    }}>
    {/* <Tab.Navigator screenOptions={{tabBarStyle: {backgroundColor: 'red'},}}> */}
      <Tab.Screen name="Contest" component={Contests} />
      <Tab.Screen name="MyContests" component={MyContest} />
      <Tab.Screen name="MyTeams" component={MyTeams} />
    </Tab.Navigator>
  );
};

export default CustomContestTabView;

const styles = StyleSheet.create({});
