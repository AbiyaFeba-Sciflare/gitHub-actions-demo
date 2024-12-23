import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const screenHeight = Dimensions.get('window').height;
const CreateTeamCard = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'black',
          margin: 5,
          borderRadius: 10,
          flex: 1,
          overflow: 'hidden',
        }}>
        <ImageBackground
          source={require('../Screens/assets/TeamBg.png')}
          resizeMode="cover"
          style={{flex: 1, justifyContent: 'center'}}>
          <View style={styles.topContainer}>
            <View>
              <Text
                style={{color: 'white', fontSize: 15, fontWeight: 'semibold'}}>
                Player21 (T1)
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../Screens/assets/edit.png')}
                style={{height: 15, width: 15, marginLeft: 5}}
              />
              <Image
                source={require('../Screens/assets/swap.png')}
                style={{height: 15, width: 15, marginLeft: 5}}
              />
              <Image
                source={require('../Screens/assets/copy.png')}
                style={{height: 15, width: 15, marginLeft: 5}}
              />
              <Image
                source={require('../Screens/assets/share.png')}
                style={{height: 15, width: 15, marginLeft: 5}}
              />
            </View>
          </View>
          <View style={styles.midContainer}>
            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    marginLeft: 10,
                    alignItems: 'center',
                    marginBottom: 5,
                  }}>
                  <Text style={{color: 'white', fontSize: 17, margin: 15}}>
                    REA
                  </Text>
                  <Text style={{color: 'white', fontSize: 17}}>5</Text>
                </View>
                <View
                  style={{
                    marginLeft: 10,
                    alignItems: 'center',
                    marginBottom: 5,
                  }}>
                  <Text style={{color: 'white', fontSize: 17, margin: 15}}>
                    COB
                  </Text>
                  <Text style={{color: 'white', fontSize: 17}}>6</Text>
                </View>
              </View>
            </View>
            <Image
              source={require('../Screens/assets/defaultPlayerImg.png')}
              style={{width: '25%', height: ' 80%'}}
            />
          </View>
          <View style={styles.lastContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'white'}}>WK</Text>
              <Text style={{color: 'white'}}> 2</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'white'}}>BAT</Text>
              <Text style={{color: 'white'}}> 4</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'white'}}>AR</Text>
              <Text style={{color: 'white'}}> 3</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'white'}}>BOWL</Text>
              <Text style={{color: 'white'}}> 2</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default CreateTeamCard;

const styles = StyleSheet.create({
  container: {
    // height:screenHeight*0.2,
    margin: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    backgroundColor: 'white',
  },
  topContainer: {
    padding: 5,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    opacity: 0.7,
  },
  midContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lastContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 8,
    alignItems: 'flex-start',
    marginLeft: 10,
    marginRight: 10,
  },
});
