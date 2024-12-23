import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

interface OnBoardingCardProps {
  onBoardingImage: string;
  onBoardingText: string;
  onBoardingSubText: string;
}
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const OnBoardingCard: React.FC<OnBoardingCardProps> = ({
  onBoardingImage,
  onBoardingText,
  onBoardingSubText,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={onBoardingImage}
        style={{
          height: '100%',
          width: '80%',
          padding: 10,
          resizeMode: 'contain',
        }}
      />
      <Text style={styles.onBoardText}>{onBoardingText}</Text>
      <Text style={styles.onBoardSubTitleText}>{onBoardingSubText}</Text>
    </View>
  );
};

export default OnBoardingCard;

const styles = StyleSheet.create({
  container: {
    // flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    height: screenHeight * 0.5,
    width: screenWidth,
  },
  onBoardText: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
  onBoardSubTitleText: {
    fontSize: 14,
    fontWeight: 'semibold',
    textAlign: 'center',
    margin: 10,
  },
});
