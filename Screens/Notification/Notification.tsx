import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import NotificationComponent from '../../Component/NotificationComponent';
import {FlatList} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

// const notificationData = [
//   {
//     id: '1',
//     image: require('../assets/rewardLogo.png'),
//     notificationDescription: 'You Won a Contest',
//   },
//   {
//     id: '2',
//     image: require('../assets/rewardLogo.png'),
//     notificationDescription: 'Join the ind as AUS Contest',
//   },
//   {
//     id: '3',
//     image: require('../assets/rewardLogo.png'),
//     notificationDescription: 'You Won a Contest',
//   },
// ];

const Notification = () => {
  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.goBack()
  }
  return (
    <SafeAreaView style={{backgroundColor: 'red',paddingTop:10}}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/backArrow.png')}
              style={{height: 20, width: 25, margin: 10}}
            />
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              Notification
            </Text>
        </View>
        {/* <FlatList
          data={notificationData}
          renderItem={({item}) => {
            <NotificationComponent />;
          }}
        /> */}
        <NotificationComponent />
        <NotificationComponent />
        <NotificationComponent />
      </View>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop:15,
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    height: 50,
    alignItems:'center',
  },
});
