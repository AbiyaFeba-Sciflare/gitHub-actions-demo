import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import useAuthStore from '../store/useGeneralState';


const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const navigation = useNavigation();
  const {signOut} = useAuthStore();

  const handleLogout = () => {
    signOut();
    navigation.reset({
      index: 0,
      routes: [{name: 'OnBoardingScreen'}],
    });
  }
  const logoutAccount = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Yes',
          onPress: () => {
            handleLogout()
          },
        },
        {
          text: 'No',
          onPress: () => console.log('No'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.profileContentContainer}>
          <View style={styles.generalContainer}>
            <Image
              source={require('./assets/Profile.png')}
              style={styles.profileIcon}
            />
            <View style={styles.playerDetailsContainer}>
              <Text style={styles.playerNameText}>Player21</Text>
              <Text style={styles.skillText}>Skill Score:541</Text>
            </View>
          </View>

          <View style={styles.ForwardIconContainer}>
            <Image
              source={require('./assets/ForwardIcon.png')}
              style={styles.ForwardIcon}
            />
          </View>
        </View>
      </View>

      <View style={styles.OverlayContainer}>
        {/* <TouchableOpacity> */}
        <View style={styles.WalletContainer}>
          <View style={styles.textContainer}>
            <Image
              source={require('../Screens/assets/WalletIcon.png')}
              style={styles.walletImgContainer}
            />
            <Text style={styles.balanceText}>My Balance</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amountText}>₹50</Text>
          </View>
        </View>
        {/* </TouchableOpacity> */}

        <View style={styles.bottomContainer}>
          <Text style={styles.addCashText}>ADD CASH</Text>
        </View>

        <View style={styles.firstContainer}>
          <TouchableOpacity>
            <View style={styles.referAndEarn}>
              <Image
                source={require('../Screens/assets/ReferAndEarnLogo.png')}
                style={styles.referImgWrapper}
              />
              <Text style={styles.referText}>Refer & Earn</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.lineView} />
          <TouchableOpacity>
            <View style={styles.myInfo}>
              <Image
                source={require('../Screens/assets/Settings.png')}
                style={styles.referImgWrapper}
              />
              <Text style={styles.referText}>My Info & Settings</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.secondContainer}>
          <TouchableOpacity>
            <View style={styles.Help}>
              <Image
                source={require('../Screens/assets/Help.png')}
                style={styles.referImgWrapper}
              />
              <Text style={styles.referText}>Help & Support</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.lineView} />
          <TouchableOpacity>
            <View style={styles.HowToPlay}>
              <Image
                source={require('../Screens/assets/HowToPlay.png')}
                style={styles.referImgWrapper}
              />
              <Text style={styles.referText}>How To Play</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.lineView} />
          <TouchableOpacity>
            <View style={styles.More}>
              <Image
                source={require('../Screens/assets/More.png')}
                style={styles.referImgWrapper}
              />
              <Text style={styles.referText}>More</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.lineView} />

          <TouchableOpacity onPress={logoutAccount}>
            <View style={styles.Logout}>
              <Image
                source={require('../Screens/assets/Logout.png')}
                style={styles.referImgWrapper}
              />
              <Text style={styles.referText}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 150,
    backgroundColor: 'black',
  },
  profileIcon: {
    height: 50,
    width: 50,
  },
  ForwardIcon: {
    height: 25,
    width: 25,
  },
  profileContentContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  playerNameText: {
    fontSize: 21,
    color: 'white',
    fontWeight: 'semibold',
  },
  skillText: {
    color: 'white',
    fontSize: 13,
    paddingTop: 5,
  },
  playerDetailsContainer: {
    flexDirection: 'column',
    margin: 10,
  },
  ForwardIconContainer: {
    margin: 20,
  },
  generalContainer: {
    flexDirection: 'row',
  },
  OverlayContainer: {
    position: 'absolute',
    top: 115,
    left: 25,
    right: 30,
  },
  WalletContainer: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    elevation: 5,

    //ios
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  walletImgContainer: {
    width: 30,
    height: 30,
    marginLeft: 15,
  },
  balanceText: {
    fontWeight: 'semibold',
    fontSize: 18,
    marginLeft: 10,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
  },
  amountText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  mainContentContainer: {
    flex: 1,
    width: '100%',
  },
  bottomContainer: {
    backgroundColor: '#99C79E',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  addCashText: {
    color: '#133C17',
    padding: 2,
  },
  firstContainer: {
    backgroundColor: '#ffffff',
    width: '100%',
    marginTop: 20,
    justifyContent: 'flex-start',
    borderRadius: 10,
  },
  referAndEarn: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  referImgWrapper: {
    width: 30,
    height: 30,
    margin: 5,
  },
  referText: {
    fontWeight: 'semibold',
    fontSize: 18,
    marginLeft: 10,
  },
  lineView: {
    backgroundColor: 'black',
    height: 0.4,
    width: '100%',
  },
  myInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  secondContainer: {
    backgroundColor: '#ffffff',
    width: '100%',
    marginTop: 20,
    justifyContent: 'flex-start',
    borderRadius: 10,
  },
  Help: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  HowToPlay: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  More: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  Logout: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
});

export default CustomDrawerContent;
