import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const MatchHeaderComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.matchHeaderContainer}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Image
          source={require('../Screens/assets/backArrow.png')}
          style={styles.imgContainer}
        />
      </TouchableOpacity>

      <View style={styles.matchContainer}>
        <Text style={styles.matchTitleText}>REA vs COB</Text>
        <Text style={styles.timerSubTitle}>17m 40s Left</Text>
      </View>
      <View style={styles.secondContainer}>
        <TouchableOpacity>
          <Image
            source={require('../Screens/assets/Notification.png')}
            style={styles.img1Container}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../Screens/assets/Wallet.png')}
            style={styles.img2Container}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MatchHeaderComponent;

const styles = StyleSheet.create({
  matchHeaderContainer: {
    backgroundColor: 'red',
    paddingLeft: 10,
    flexDirection: 'row',
    paddingBottom: 5,
    paddingTop:25,
  },
  imgContainer: {
    height: 20,
    width: 26,
  },
  matchContainer: {
    marginLeft: 10,
  },
  matchTitleText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  timerSubTitle: {
    color: 'white',
    fontWeight: 'regular',
  },
  secondContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  img1Container: {
    height: 25,
    width: 20,
    marginRight: 20,
  },
  img2Container: {
    height: 25,
    width: 25,
  },
});
