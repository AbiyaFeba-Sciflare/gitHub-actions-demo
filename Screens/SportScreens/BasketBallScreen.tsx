import {Image, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BannerList from '../../Component/BannerList';
import UpcomingMatchesCard from '../../Component/UpcomingMatchesCard';

const BasketBallScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/BasktBall.png')}
        style={styles.basketBallContainer}
      />
      <Text style={styles.comingSoonText}>Coming soon</Text>
    </View>
  );
};

export default BasketBallScreen;

const styles = StyleSheet.create({
  subTitleText: {
    fontSize: 17,
    fontWeight: 'bold',
    margin: 10,
  },
  container: {
    backgroundColor: 'lightgray',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  basketBallContainer: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },
  comingSoonText: {
    fontSize: 20,
    fontWeight: 'semibold',
    marginVertical: 40,
  },
});
