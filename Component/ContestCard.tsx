import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface ContestCardProps {
  contestPrize: string;
  EntryFee: string;
  SpotsLeft: string;
  TotalSpots: string;
}

const ContestCard: React.FC<ContestCardProps> = ({
  contestPrize,
  EntryFee,
  SpotsLeft,
  TotalSpots,
}) => {
  return (
    // CONTEST CARD
    <View style={styles.cardContainer}>
      <View style={styles.firstContainer}>
        <View style={styles.startContainer}>
          <Text style={styles.maxPrizeTitle}>Max Prize Pool</Text>
          <Text style={styles.prizeTitle}>₹ 25,200</Text>
        </View>
        <View style={styles.endConatiner}>
          <Text style={styles.entryText}>Entry: 25</Text>
          <TouchableOpacity>
            <View style={styles.ButtonStyle}>
              <Text style={styles.buttonTextView}>FREE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Image
        source={require('../Screens/assets/progressLine.png')}
        style={styles.progressImageContainer}
      />

      <View style={styles.secondContainer}>
        <Text style={styles.leftText}>75 Spots Left</Text>
        <Text style={styles.rightText}>1,5000 Spots</Text>
      </View>
      <View style={styles.lastFooterContainer}>
        <View style={styles.prizeContainer}>
          <Image
            source={require('../Screens/assets/prizeRange.png')}
            style={styles.img1Wrapper}
          />
          <Text>₹80</Text>
        </View>
        <View style={styles.prizeContainer}>
          <Image
            source={require('../Screens/assets/WinningPercentCup.png')}
            style={styles.img2Wrapper}
          />
          <Text>21%</Text>
        </View>
        <View style={styles.prizeContainer}>
          <Image
            source={require('../Screens/assets/TeamLimit.png')}
            style={styles.img2Wrapper}
          />
          <Text>Upto 11</Text>
        </View>
        <View style={styles.prizeContainer}>
          <Image
            source={require('../Screens/assets/INR.png')}
            style={styles.img2Wrapper}
          />
          <Text>Flexible</Text>
        </View>
      </View>
    </View>

    // CONTEST CARD ENDING
  );
};

export default ContestCard;

const styles = StyleSheet.create({
  // CARD STYLING
  cardContainer: {
    // height:130,
    margin: 10,
    borderColor: 'lightgray',
    borderRadius: 10,
    borderWidth: 2,
  },
  footerContainer: {
    flex: 1,
    height: 10,
  },
  ButtonStyle: {
    marginTop: 5,
  },
  buttonTextView: {
    backgroundColor: 'green',
    color: 'white',
    padding: 5,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  firstContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  startContainer: {
    justifyContent: 'flex-start',
    margin: 10,
  },
  endConatiner: {
    justifyContent: 'flex-end',
    margin: 10,
  },
  progressImageContainer: {
    width: '95%',
    height: 5,
    margin: 5,
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftText: {
    margin: 10,
  },
  rightText: {
    margin: 10,
  },
  lastFooterContainer: {
    backgroundColor: 'pink',
    height: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    padding: 2,
  },
  prizeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img1Wrapper: {
    height: 30,
    width: 30,
  },
  img2Wrapper: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  maxPrizeTitle: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'regular',
  },
  prizeTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 5,
  },
  entryText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'regular',
  },
});
