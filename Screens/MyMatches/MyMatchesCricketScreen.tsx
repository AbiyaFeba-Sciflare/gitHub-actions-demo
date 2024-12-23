import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomTabView from '../../Component/CustomTabView';

const MyMatchesCricketScreen = () => {
  return (
    <View style={styles.container}>
      <CustomTabView />
    </View>
  );
};

export default MyMatchesCricketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
