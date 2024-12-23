import React, { useContext, useState, useRef, useEffect } from 'react';
import {SafeAreaView,Image,StyleSheet,Text,TextInput,TouchableOpacity,View,Alert,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useAuthStore from '../../store/useGeneralState';

const OtpScreen = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const {storedPhoneNumber} = useAuthStore(); 
  const {storedEmail} = useAuthStore();

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (text: string, index: number) => {
    if (!text && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpSubmit = () => {
    const otpString = otp.join('');
    if (otpString === '123456') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Invalid OTP');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/backArrow.png')}
              style={styles.imgContainer}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Log in</Text>
        </View>

        <View style={styles.initialViewContainer}>
          <Text style={styles.otpText}>OTP Sent to {storedEmail}</Text>
          <View style={styles.otpContainer}>
            <Text style={styles.otpHeaderText}> Enter the OTP you received</Text>
            <View style={styles.otpInputWrapper}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  style={styles.otpTextInput}
                  keyboardType="numeric"
                  maxLength={1}
                  value={digit}
                  onChangeText={text => handleOtpChange(text, index)}
                  onKeyPress={({ nativeEvent }) =>
                    nativeEvent.key === 'Backspace' &&
                    handleBackspace(digit, index)
                  }
                  ref={ref => (inputRefs.current[index] = ref)}
                />
              ))}
            </View>

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleOtpSubmit}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  headerContainer: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  imgContainer: {
    height: 20,
    width: 30,
    margin: 20,
    marginTop: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  otpText: {
    fontSize: 15,
    color: 'gray',
    fontWeight: '600',
    margin: 10,
  },
  otpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    padding: 20,
    borderColor: 'lightgray',
    borderRadius: 5,
    borderWidth: 0.5,
  },
  otpHeaderText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  otpInputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 10,
  },
  otpTextInput: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
    width: 35,
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  initialViewContainer: {
    backgroundColor: 'white',
  },
});
