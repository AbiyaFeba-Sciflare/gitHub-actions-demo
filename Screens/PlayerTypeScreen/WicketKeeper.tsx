import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import PlayerCard from '../../Component/PlayerCard';

const WicketKeeper = () => {
  const playerData = [
    {
      id: 1,
      playerName: 'M Doss-R',
      selectedPercent: '89.4',
      points: '48',
      credits: '8.5',
    },
    {
      id: 1,
      playerName: 'M Mathavan',
      selectedPercent: '16.16',
      points: '52',
      credits: '8.0',
    },
    {
      id: 1,
      playerName: 'A Akash-RS',
      selectedPercent: '52.97',
      points: '106',
      credits: '7.5',
    },
    {
      id: 1,
      playerName: 'A Rajendran',
      selectedPercent: '10.57',
      points: '52',
      credits: '5.0',
    },
    {
      id: 1,
      playerName: 'M Doss-R',
      selectedPercent: '89.4',
      points: '48',
      credits: '8.5',
    },
    {
      id: 1,
      playerName: 'M Mathavan',
      selectedPercent: '16.16',
      points: '52',
      credits: '8.0',
    },
    {
      id: 1,
      playerName: 'A Akash-RS',
      selectedPercent: '52.97',
      points: '106',
      credits: '7.5',
    },
    {
      id: 1,
      playerName: 'A Rajendran',
      selectedPercent: '10.57',
      points: '52',
      credits: '5.0',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>Select 1-8 Wicket-Keepers</Text>
        <Image
          source={require('../assets/Filter.png')}
          style={styles.FilterWrapper}
        />
      </View>
      <View style={styles.secondContainer}>
        <Text>Selected By</Text>
        <View style={styles.secondWrapperContainer}>
          <Text style={styles.pointText}>Points</Text>
          <Text>Credits</Text>
        </View>
      </View>
      <FlatList
        data={playerData}
        renderItem={({item}) => (
          <TouchableOpacity>
            <PlayerCard
              playerName={item.playerName}
              selectedPercent={item.selectedPercent}
              points={item.points}
              credits={item.credits}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default WicketKeeper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  FilterWrapper: {
    height: 20,
    width: 20,
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 10,
  },
  secondWrapperContainer: {
    flexDirection: 'row',
  },
  pointText: {
    marginRight: 10,
  },
});
