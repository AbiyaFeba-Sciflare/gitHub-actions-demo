import {SafeAreaView,TextInput,Image,StyleSheet,Text,TouchableOpacity,View,} from 'react-native';
import React, { useState, useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import useAuthStore from '../../store/useGeneralState';
import Toast from 'react-native-toast-message';

type stackParamList = {
  OtpScreen: { data: string };
};
type LoginScreenNavigationProps = StackNavigationProp<stackParamList, 'OtpScreen'>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProps;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const { signIn, storedPhoneNumber, storedEmail } = useAuthStore(); 
  const [mobileNum, setMobileNum] = useState('');
  const [isImageOne, setisImageOne] = useState(true);

  const notSelected = require('../assets/redBox.png');
  const selected = require('../assets/selectedBox.png');

  const ImageToggle = () => {
    setisImageOne(!isImageOne);
  };

  // Function to validate email or phone number
  const validatePhoneNumber = (input: string) => {
    const phoneRegex = /^[0-9]{10}$/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (phoneRegex.test(input)) {
      return 'phone';
    } else if (emailRegex.test(input)) {
      return 'email';
    } else {
      return null;
    }
  };

  const validateNavigate = async () => {
    if (mobileNum === '' || isImageOne) {
      Toast.show({
        type: 'error',
        text1: 'Validation Error',
        text2: 'Please enter a valid number or email and accept the terms.',
      });
      return;
    }

    const validationResult = validatePhoneNumber(mobileNum);

    if (validationResult) {
      if (validationResult === 'phone' && mobileNum !== storedPhoneNumber) {
        Toast.show({
          type: 'error',
          text1: 'Phone number mismatch',
          text2: 'The entered phone number does not match the stored phone number.',
        });
        return;
      } else if (validationResult === 'email' && mobileNum !== storedEmail) {
        Toast.show({
          type: 'error',
          text1: 'Email mismatch',
          text2: 'The entered email does not match the stored email.',
        });
        return;
      }

      try {
        await signIn(mobileNum); // Call your signIn function here
        navigation.navigate('OtpScreen', { data: mobileNum });
      } catch (error) {
        console.log(error);
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Invalid Input',
        text2: 'Please enter a valid phone number or email.',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.overallContainer}>
        <View style={styles.headerContainer}>
          <View onTouchStart={() => navigation.goBack()}>
            <Image source={require('../assets/backArrow.png')} style={styles.imgContainer} />
          </View>
          <Text style={styles.headerText}>Login</Text>
        </View>
        <View style={styles.initialContainer}>
          <View style={styles.socialAuthContainer}>
            <TouchableOpacity>
              <View style={styles.googleAuthContainer}>
                <Image source={require('../assets/FacebookLogo.png')} style={styles.googleImgContainer} />
                <Text style={styles.googleTextContainer}>Facebook</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.googleAuthContainer}>
                <Image source={require('../assets/GoogleLogo.png')} style={styles.googleImgContainer} />
                <Text style={styles.googleTextContainer}>Google</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.orContainer}>
            <Text>or</Text>
          </View>
          <View style={styles.secondContainer}>
            <View style={styles.inviteCodeContainer}>
              <TextInput
                style={styles.inviteCodeInputStyle}
                placeholderTextColor={'red'}
                placeholder="Email or phone Number"
                value={mobileNum}
                onChangeText={setMobileNum}
                autoFocus={true}
                keyboardType="default"
              />
              <View style={styles.redLine} />
            </View>
            <Text style={styles.otpText}>You will receive an OTP for Verification</Text>
            <View style={styles.checkBoxContainer}>
              <TouchableOpacity onPress={ImageToggle} style={{ flexDirection: 'row' }}>
                <Image source={isImageOne ? notSelected : selected} style={styles.checkBoxImg} />
                <Text style={styles.checkBoxTextStyle}>I certify that I am above 18 years.</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={validateNavigate}>
            <View
              style={[
                styles.registerBtnContainer,
                { backgroundColor: isImageOne ? 'red' : 'green' },
              ]}
            >
              <Text style={styles.registerText}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.policyContainer}>
          <Text style={styles.policyText}>By registering, I agree to Fantasy Sports pro’s T&Cs</Text>
        </View>
      </View>
      <Toast />
    </SafeAreaView>
  );
};

export default LoginScreen;

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
  inviteCodeContainer: {
    backgroundColor: '#f0f0f0',
    margin: 10,
  },
  secondContainer: {
    marginVertical: 10,
  },
  checkBoxContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
  },
  imgContainer: {
    height: 20,
    width: 30,
    margin: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inviteCodeInputStyle: {
    padding: 10,
  },
  redLine: {
    backgroundColor: 'red',
    height: 1.5,
    width: '100%',
  },
  otpText: {
    marginHorizontal: 10,
    fontSize: 13,
    color: 'gray',
  },
  checkBoxTextStyle: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: 'black',
    paddingLeft: 10,
  },
  checkBoxImg: {
    height: 20,
    width: 20,
  },
  registerBtnContainer: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
  registerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  policyContainer: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  policyText: {},
  initialContainer: {
    margin: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  orContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialAuthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 15,
    width: '100%',
  },
  googleAuthContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 0.5,
    padding: 10,
  },
  googleImgContainer: {
    height: 20,
    width: 20,
    marginLeft: 25,
  },
  googleTextContainer: {
    fontSize: 15,
    marginLeft: 10,
    margin: 5,
    marginRight: 20,
  },
  overallContainer: {
    backgroundColor: 'white',
  },
});
