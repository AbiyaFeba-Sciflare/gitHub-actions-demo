import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CompletedMatchCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <View style={styles.startConatiner}>
          <View style={styles.matchConatiner}>
            <Image
              source={require('../Screens/assets/Team1.png')}
              style={styles.imageWrapper}
            />
            <Text style={styles.teamText}>COB</Text>
            <Text style={styles.vsText}>vs</Text>
            <Image
              source={require('../Screens/assets/Team2.png')}
              style={styles.imageWrapper}
            />
            <Text style={styles.teamText}>UCB</Text>
          </View>
          <View style={styles.commentaryContainer}>
            <Text style={styles.commentaryText}>
              UCB beats COB by 3 wickets
            </Text>
          </View>
        </View>
        <View style={styles.endConatiner}>
          <Text style={styles.sportsType}>Cricket</Text>
          <Text style={styles.matchDate}>Jul 07 2023</Text>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.firstSContainer}>
          <Text style={styles.highestPointsText}>Highest Points</Text>
          <View style={styles.pointsView}>
            <Text style={styles.pointsText}>460.0 </Text>
            <Text style={styles.teamsText}>(T1)</Text>
          </View>
        </View>
        <View style={styles.secondSContainer}>
          <Text>Teams Created</Text>
          <Text style={styles.numOfTeams}>1</Text>
        </View>
      </View>
      <View style={styles.thirdContainer}>
        <Text style={styles.thirdContText}>Dream Team : 1118.5 pts</Text>
      </View>
    </View>
  );
};

export default CompletedMatchCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F59397',
    borderRadius: 10,
    margin: 10,
    marginTop: 5,
    // marginVertical:50,
    elevation: 5,

    //ios
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  firstContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  startConatiner: {
    flexDirection: 'column',
  },
  endConatiner: {
    // flexDirection:'column',
    // alignItems:'flex-end',
    margin: 3,
  },
  matchConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  commentaryContainer: {
    flexDirection: 'row',
  },
  imageWrapper: {
    height: 30,
    width: 30,
    marginLeft: 5,
  },
  wrapperContainer: {
    backgroundColor: 'pink',
  },
  sportsType: {
    backgroundColor: 'pink',
    textAlign: 'center',
    borderRadius: 5,
    margin: 5,
  },
  teamText: {
    fontSize: 15,
    fontWeight: 'semibold',
    marginLeft: 5,
  },
  vsText: {
    color: 'gray',
    fontSize: 15,
    marginLeft: 10,
  },
  commentaryText: {
    color: 'gray',
    fontSize: 12,
    margin: 5,
    marginLeft: 10,
  },
  matchDate: {
    color: 'gray',
    fontSize: 12,
    marginVertical: 11,
  },
  secondContainer: {
    backgroundColor: '#F9C6C8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  firstSContainer: {
    margin: 10,
  },
  secondSContainer: {
    marginVertical: 10,
    alignItems: 'flex-end',
    margin: 10,
  },
  pointsView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  highestPointsText: {
    fontSize: 13,
  },
  pointsText: {
    fontSize: 19,
    fontWeight: 'semibold',
  },
  teamsText: {
    fontSize: 12,
  },
  numOfTeams: {
    fontSize: 16,
    marginVertical: 2,
  },
  thirdContainer: {
    backgroundColor: '#F59397',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  thirdContText: {
    padding: 3,
    marginLeft: 10,
  },
});
