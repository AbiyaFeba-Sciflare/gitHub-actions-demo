import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import UpcomingMatchesCard from '../../Component/UpcomingMatchesCard';

const matchData = [
  {
    id: '1',
    league: 'ECS Hungry T10',
    time: '1 hr 56 mins',
    matchTime: '6.45 pm',
  },
  {id: '2', league: 'IPL 2024', time: '2 hr 10 mins', matchTime: '7.30 pm'},
  {id: '3', league: 'CPL 2024', time: '3 hr 15 mins', matchTime: '8.00 pm'},
];

const Live = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={matchData}
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

export default Live;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    flex: 1,
  },
  subTitleText: {
    fontSize: 17,
    fontWeight: 'bold',
    margin: 10,
  },
});
