import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MyMatchesFootBallScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ImageWrapper}>
        <Image
          source={require('../../Screens/assets/ComingSoon.png')}
          style={styles.imageContainer}
        />
      </View>
    </View>
  );
};

export default MyMatchesFootBallScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: 200,
  },
  ImageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
});
