import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BannerList from '../../Component/BannerList';
import UpcomingMatchesCard from '../../Component/UpcomingMatchesCard';

const FootBallScreen = () => {
  const upcomingMatches = [
    {id: '1',league: 'ECS Hungry T10',time: '1 hr 56 mins',matchTime: '6.45 pm'},
    {id: '2', league: 'IPL 2024', time: '2 hr 10 mins', matchTime: '7.30 pm'},
    {id: '3', league: 'CPL 2024', time: '3 hr 15 mins', matchTime: '8.00 pm'},
    {id: '4', league: 'ECS Hungry T10',  time: '1 hr 56 mins', matchTime: '6.45 pm'},
    {id: '5', league: 'IPL 2024', time: '2 hr 10 mins', matchTime: '7.30 pm'},
    {id: '6', league: 'CPL 2024', time: '3 hr 15 mins', matchTime: '8.00 pm'},
  ];
  return (
    <View style={styles.container}>
      <BannerList />
      <Text style={styles.subTitleText}>Upcoming Matches</Text>
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
};

export default FootBallScreen;
const styles = StyleSheet.create({
  subTitleText: {
    fontSize: 17,
    fontWeight: 'bold',
    margin: 10,
  },
  container: {
    backgroundColor: 'lightgray',
    flex: 1,
  },
});
