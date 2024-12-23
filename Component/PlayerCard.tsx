import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface PlayerCardProps {
  playerName: string;
  selectedPercent: string;
  points: string;
  credits: string;
}
const PlayerCard: React.FC<PlayerCardProps> = ({
  playerName,
  selectedPercent,
  points,
  credits,
}) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.imageWrapper}>
        <View>
          <Image
            source={require('../Screens/assets/Info.png')}
            style={styles.infoWrapper}
          />
          <Image
            source={require('../Screens/assets/defaultPlayer.png')}
            style={styles.profileWrapper}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.playerNameText}>{playerName}</Text>
          <Text>Sel by {selectedPercent}</Text>
        </View>
      </View>
      <View style={styles.pointsContainer}>
        <Text>{points}</Text>
        <View style={styles.pointsWrapper}>
          <Text>{credits}</Text>
          <Image
            source={require('../Screens/assets/playerAddition.png')}
            style={styles.stateWrapper}
          />
        </View>
      </View>
    </View>
  );
};

export default PlayerCard;

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'#FFD699',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  profileWrapper: {
    width: 70,
    height: 50,
    marginBottom: 5,
  },
  infoWrapper: {
    width: 15,
    height: 15,
  },
  contentContainer: {
    flexDirection: 'column',
  },
  pointsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  pointsWrapper: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  stateWrapper: {
    height: 20,
    width: 20,
    marginLeft: 8,
  },
  playerNameText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
