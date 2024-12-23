import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {TabNavigationState} from '@react-navigation/native';
import WicketKeeper from '../Screens/PlayerTypeScreen/WicketKeeper';
import Batsman from '../Screens/PlayerTypeScreen/Batsman';
import Bowler from '../Screens/PlayerTypeScreen/Bowler';
import AllRounder from '../Screens/PlayerTypeScreen/AllRounder';

const Tab = createMaterialTopTabNavigator();

type PlayerCategoryTabViewProps = {
  state: TabNavigationState<ParamListBase>;
  descriptors: {[key: string]: any};
  navigation: NavigationProp<ParamListBase>;
};

const PlayerCategoryTabView = ({
  state,
  descriptors,
  navigation,
}: PlayerCategoryTabViewProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={{
              flex: 1,
              paddingTop: 8,
              paddingLeft: 5,
              paddingRight: 5,
              alignItems: 'center',
            }}>
            <View>
              <Text style={{color: isFocused ? 'maroon' : 'black'}}>
                {route.name}
              </Text>
              <View
                style={{
                  height: 2,
                  backgroundColor: isFocused ? 'maroon' : '#D9D9D9',
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  marginTop: 5,
                }}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const CustomTopTabView = () => {
  return (
    <Tab.Navigator tabBar={props => <PlayerCategoryTabView {...props} />}>
      <Tab.Screen name="WK" component={WicketKeeper} />
      <Tab.Screen name="BAT" component={Batsman} />
      <Tab.Screen name="AR" component={AllRounder} />
      <Tab.Screen name="BOWL" component={Bowler} />
    </Tab.Navigator>
  );
};

export default CustomTopTabView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
  },
});
