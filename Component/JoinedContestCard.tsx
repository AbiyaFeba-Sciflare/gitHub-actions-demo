import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
  Dimensions,
} from 'react-native';

const {height: screenHeight} = Dimensions.get('window');

const JoinedContestCard = () => {
  const [expanded, setExpanded] = useState(false);
  const [height] = useState(new Animated.Value(0)); // Animated value for the height
  const opacity = useState(new Animated.Value(0))[0]; // Opacity animation for smooth appearance

  const toggleExpand = () => {
    Animated.parallel([
      Animated.timing(height, {
        toValue: expanded ? 0 : screenHeight * 0.3, // Toggle height on expand/collapse
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: expanded ? 0 : 1, // Toggle opacity (visibility)
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <Text style={{margin: 10, fontSize: 13, fontWeight: '600'}}>
        Share this contest with your friends
      </Text>

      {/* Card Content */}
      <View style={styles.cardContainer}>
        <View style={styles.headerRow}>
          <Text style={{color: 'gray'}}>Max Prize Pool</Text>
          <Text>Entry: 20</Text>
        </View>

        <View style={styles.prizeRow}>
          <Text style={styles.prizeText}>25,000</Text>
          <Text style={styles.freeBadge}>FREE</Text>
        </View>

        <View style={{margin: 10}}>
          <Image
            source={require('../Screens/assets/ProgressBar.png')}
            style={{width: '100%', height: 5, borderRadius: 10}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 10,
            marginRight: 10,
          }}>
          <Text style={{color: 'red'}}>75 Spots Left</Text>
          <Text>1,500 Spots</Text>
        </View>

        <View
          style={{
            backgroundColor: 'pink',
            height: 40,
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../Screens/assets/prizeRange.png')}
              style={{height: 35, width: 35}}
            />
            <Text style={{marginLeft: 5}}>80</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../Screens/assets/WinningPercentCup.png')}
              style={{height: 25, width: 24}}
            />
            <Text style={{marginLeft: 5}}>21%</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../Screens/assets/TeamLimit.png')}
              style={{height: 25, width: 24}}
            />
            <Text style={{marginLeft: 5}}>Upto 11</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../Screens/assets/INR.png')}
              style={{height: 25, width: 22}}
            />
            <Text style={{marginLeft: 5}}>Flexible</Text>
          </View>
        </View>
        {/* Expand/Collapse Button */}
        <TouchableOpacity onPress={toggleExpand} style={styles.toggleButton}>
          <View style={styles.buttonRow}>
            <Text>Joined with 1 team</Text>
            <Image
              source={
                expanded
                  ? require('../Screens/assets/upArrow.png')
                  : require('../Screens/assets/downArrow.png')
              }
              style={{height: 15, width: 15}}
            />
          </View>
        </TouchableOpacity>

        {/* Dropdown Content */}
        <Animated.View
          style={[
            styles.dropdownContainer,
            {
              maxHeight: height, // Animated max height
              opacity: opacity, // Control visibility
              overflow: 'hidden', // Hide overflow content during collapse
            },
          ]}>
          <View style={styles.expandedContent}>
            <View style={styles.teamInfo}>
              <Text style={{fontSize: 19, fontWeight: 'bold'}}>Team 1</Text>
              <View style={styles.iconRow}>
                <Image
                  source={require('../Screens/assets/blackEdit.png')}
                  style={styles.icon}
                />
                <Image
                  source={require('../Screens/assets/blackSwap.png')}
                  style={[styles.icon, {marginLeft: 10}]}
                />
              </View>
            </View>
            <View style={styles.captainRow}>
              <View>
                <Text>Captain</Text>
                <Text style={{fontSize: 13, fontWeight: 'bold', marginTop: 5}}>
                  M Doss-R
                </Text>
              </View>
              <View>
                <Text>Vice Captain</Text>
                <Text style={{fontSize: 13, fontWeight: 'bold', marginTop: 5}}>
                  A Akash-RS
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.addTeamButton}>
            <Text style={styles.addTeamText}>ADD TEAM 20</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  cardContainer: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    elevation: 5,
    paddingBottom: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  prizeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  prizeText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  freeBadge: {
    backgroundColor: 'green',
    color: 'white',
    padding: 8,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  toggleButton: {
    marginTop: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center',
  },
  dropdownContainer: {
    overflow: 'hidden',

    borderRadius: 8,
    marginHorizontal: 10,
  },
  expandedContent: {
    padding: 10,
    backgroundColor: '#FFD699',
    borderRadius: 10,
    marginBottom: 10,
  },
  teamInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: 'row',
  },
  icon: {
    height: 15,
    width: 15,
  },
  captainRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  addTeamButton: {
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  addTeamText: {
    margin: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default JoinedContestCard;
