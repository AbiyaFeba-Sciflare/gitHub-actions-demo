import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const FooterComponent = ({navigation}) => {
  return (
    <View style={styles.footer}>
      {/* REGISTER BUTTON */}
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}>LOGIN</Text>
        </View>
      </TouchableOpacity>

      {/* Additional Options */}
      {/* <View style={styles.thirdContainer}>
        <View style={styles.firstHorizontalContainer}>
          <Text style={styles.firstText}>Invite By a Friend?</Text>
          <Text style={styles.secondText}>Already A User?</Text>
        </View>
        <View style={styles.secondHorizontalContainer}>
          <TouchableOpacity>
            <Text style={styles.btn2Wrapper}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.btn1Wrapper}>Enter the Code</Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
};

export default FooterComponent;

const styles = StyleSheet.create({
  footer: {
    padding: 20,
    justifyContent: 'flex-end',
  },
  btnContainer: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  thirdContainer: {
    marginTop: 15,
  },
  firstHorizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  secondHorizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstText: {
    fontSize: 16,
    fontWeight: '300',
  },
  secondText: {
    fontSize: 16,
    fontWeight: '300',
  },
  btn1Wrapper: {
    fontSize: 17,
    fontWeight: 'bold',
    padding: 10,
  },
  btn2Wrapper: {
    fontSize: 17,
    fontWeight: 'bold',
    padding: 10,
  },
});
