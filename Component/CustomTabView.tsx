import React, {useState} from 'react';
import {FlatList, View, Text, StyleSheet, Dimensions} from 'react-native';
import {TabView as RNTabView, SceneMap, TabBar} from 'react-native-tab-view';
import UpcomingMatchesCard from './UpcomingMatchesCard';
import {useNavigation} from '@react-navigation/native';
import CompletedMatchCard from './CompletedMatchCard';

// const navigation = useNavigation()
const upcomingMatches = [
  {
    id: '1',
    league: 'ECS Hungry T10',
    time: '1 hr 56 mins',
    matchTime: '6.45 pm',
  },
  {id: '2', league: 'IPL 2024', time: '2 hr 10 mins', matchTime: '7.30 pm'},
  {id: '3', league: 'CPL 2024', time: '3 hr 15 mins', matchTime: '8.00 pm'},
];

// Define your routes
const FirstRoute = () => (
  <View style={[styles.container, {backgroundColor: '#fffffff'}]}>
    <FlatList
      data={upcomingMatches}
      renderItem={({item}) => (
        <UpcomingMatchesCard
          league={item.league}
          time={item.time}
          matchTime={item.matchTime}
        />
      )}
    />
  </View>
);

const SecondRoute = () => (
  <View style={[styles.container, {backgroundColor: '#ffffff'}]}>
    <FlatList
      data={upcomingMatches}
      renderItem={({item}) => (
        <UpcomingMatchesCard
          league={item.league}
          time={item.time}
          matchTime={item.matchTime}
        />
      )}
    />
  </View>
);

const ThirdRoute = () => (
  <View style={[styles.container, {backgroundColor: '#ffffff'}]}>
    <FlatList
      data={upcomingMatches}
      renderItem={({item}) => (
        // <UpcomingMatchesCard league={item.league} time={item.time} matchTime={item.matchTime}/>
        <CompletedMatchCard />
      )}
    />
  </View>
);
const CustomTabView = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Upcoming'},
    {key: 'second', title: 'Live'},
    {key: 'third', title: 'Completed'},
  ]);

  return (
    <RNTabView
      style={styles.tabViewContainer}
      navigationState={{index, routes}}
      renderScene={SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
      })}
      onIndexChange={setIndex}
      initialLayout={{width: Dimensions.get('window').width}}
      renderTabBar={props => (
        <TabBar
          {...props}
          style={{backgroundColor: 'white'}}
          activeColor={'red'}
          inactiveColor={'black'}
          indicatorStyle={{backgroundColor: 'red'}}
        />
      )}
    />
  );
};

export default CustomTabView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  tabViewContainer: {},
});
