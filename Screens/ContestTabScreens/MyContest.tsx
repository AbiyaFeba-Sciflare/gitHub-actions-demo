import {StyleSheet, View} from 'react-native';
import React from 'react';
import JoinedContestCard from '../../Component/JoinedContestCard';

const MyContest = () => {
  return (
    <View style={styles.container}>
      <JoinedContestCard />
      {/* <Image source={require('../assets/EmptyContest.png')} style={styles.emptyImgView}/> */}
      {/* <TouchableOpacity>
        <Text style={styles.btnContainer}>JOIN A CONTEST</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default MyContest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  emptyImgView: {
    height: 200,
    width: '50%',
  },
  btnContainer: {
    color: 'white',
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    marginVertical: 40,
  },
});
