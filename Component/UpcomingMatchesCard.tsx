import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

interface UpcomingMatchesCardProps {
  league: string;
  time: string;
  matchTime: string;
  teamAName: string;
  teamBName: string;
  teamALogo: any;
  teamBLogo: any;
  prize: string;
}


const UpcomingMatchesCard: React.FC<UpcomingMatchesCardProps> = ({
  league,
  time,
  matchTime,
  teamAName,
  teamBName,
  teamALogo,
  teamBLogo,
  prize,
}) => {
  const navigation = useNavigation()

  const navigateToContest = () => {
    navigation.navigate('ContestScreen')
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity  onPress={navigateToContest}>
      <View style={styles.cardContainer}>
        <View style={styles.leagueContainer}>
          <Text style={styles.leagueText}>{league}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.img1Container}>
            <View style={styles.teamDetailsContainer}>
              <Image
                source={require('../Screens/assets/teamA.png')}
                style={styles.teamAContainer}
              />
              <Text style={styles.LeftTeamNameContainer}>Royal Eagles</Text>
            </View>
            <View>
              <Text style={styles.teamText}>REA</Text>
            </View>
          </View>
          <View style={styles.timingDetailsContainer}>
            <View style={styles.timerContainer}>
              <Text style={styles.timerText}>{time}</Text>
              <Text style={styles.timer2Text}>{matchTime}</Text>
            </View>
          </View>
          <View style={styles.img2Container}>
            <View>
              <Text style={styles.teamText}>REA</Text>
            </View>
            <View style={styles.teamDetailsContainer}>
              <Image
                source={require('../Screens/assets/teamA.png')}
                style={styles.teamAContainer}
              />
              <Text style={styles.RightTeamNameContainer}>Royal Eagles</Text>
            </View>
          </View>
          {/* <View style={styles.img2Container}>
                <Text>REA</Text>
            <Image source={require('../Screens/assets/teamA.png')} style={styles.teamBContainer}/>
            </View> */}
        </View>
        <View style={styles.rewardsContainer}>
          <View style={styles.linerGradientBaseContainer}>
            <LinearGradient
              colors={['#de304a', '#ffffff']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.gradientStyle}>
              <View style={styles.rewardsStyleContainer}>
                <Text style={styles.rewardsText}>MEGA 84 LAKHS</Text>
              </View>
            </LinearGradient>
          </View>
        </View>
      </View>
      </TouchableOpacity>
     
    </View>
  );
};

export default UpcomingMatchesCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 10,
  },
  cardContainer: {
    width: '100%',
  },
  leagueContainer: {
    width: '100%',
    height: 20,
    backgroundColor: 'pink',
    // transform: [{ skewX: '-20deg' }]
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teamAContainer: {
    width: 70,
    height: 70,
  },
  teamBContainer: {
    width: 70,
    height: 70,
  },
  img1Container: {
    position: 'relative',
    // width:100,
    // height:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img2Container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timingDetailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientContainer: {
    flex: 1,
  },
  logoImageContainer: {
    height: 100,
    width: 100,
  },
  teamText: {
    fontSize: 16,
    fontWeight: 'semibold',
  },
  timerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    backgroundColor: 'pink',
    color: 'maroon',
    padding: 2,
    borderRadius: 3,
  },
  timer2Text: {
    color: 'gray',
    marginVertical: 10,
  },
  gradientStyle: {
    flex: 1,
  },
  rewardsContainer: {
    height: 20,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 10,
  },
  rewardsText: {
    fontSize:10,
    fontWeight: 'semibold',
    color: 'white',
    paddingLeft:5,
    // marginBottom:2,
  },
  linerGradientBaseContainer: {
    backgroundColor: 'black',
    height: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 8,
    overflow: 'hidden',
  },
  leagueText: {
    fontSize: 12,
    padding: 3,
  },
  rewardsStyleContainer: {
    // backgroundColor:'pink',
    margin: 2,
    alignItems: 'baseline',
    paddingLeft: 2,
  },
  baseImage1: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    flexDirection: 'row',
    // paddingBottom:20,
  },
  overlayImage1: {
    position: 'absolute',
    top: 5,
    left: 30,
    width: 100,
    height: 100,
    resizeMode: 'contain',
    // backgroundColor:'black',
  },
  LeftTeamNameContainer: {
    // backgroundColor:'gray',
    marginBottom: 5,
    marginLeft: 5,
    color: 'gray',
  },
  RightTeamNameContainer: {
    // backgroundColor:'gray',
    marginBottom: 5,
    marginRight: 5,
    color: 'gray',
  },
  teamDetailsContainer: {},
});
