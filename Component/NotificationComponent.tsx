import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const NotificationComponent = () => {
  return (
    <View
      style={{
        height: 60,
        margin: 10,
        backgroundColor: '#FFD9DB',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <View
        style={{
          margin: 10,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../Screens/assets/notificationLogo.png')}
            style={{height: 50, width: 50}}
          />
          <Text style={{marginLeft: 20}}>You Won a Contest</Text>
        </View>
        <Text style={{color: 'gray'}}>5:18 PM</Text>
      </View>
    </View>
  );
};

export default NotificationComponent;

const styles = StyleSheet.create({});
