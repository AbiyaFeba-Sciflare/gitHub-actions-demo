import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('OnBoardingScreen');
    }, 2000);
    return () => clearTimeout(timer);
  });
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/FspLogo.png')} />
      </View>
    </View>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imageContainer: {},
  imageWrapper: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
