import {
  SafeAreaView,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import PreviewPlayer from '../../Component/PreviewPlayer';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const Preview = () => {
  return (
    <SafeAreaView>
      <View style={{flex: 1, width: screenWidth, height: screenHeight}}>
        <View style={styles.headerContainer}>
          <View
            style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
            <TouchableOpacity>
              <Image
                source={require('../assets/backArrow.png')}
                style={{height: 20, width: 25, margin: 10}}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Player 21</Text>
          </View>
          <View style={{backgroundColor: 'gray', width: '100%', height: 2}} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.playersText}>Players</Text>
              <Text style={styles.playerCountText}>11/11</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.playersText}>REA</Text>
              <Text style={styles.playerCountText}>5 : 6</Text>
              <Text style={styles.playersText}>COB</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={styles.playersText}>Credits Left</Text>
              <Text style={styles.playerCountText}>23.5</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../assets/PreviewBG.png')}
            style={styles.bgImageWrapper}>
            {/* <Text style={{color:'white',margin:10}}>Wicket-Keepers</Text>
                    <View style={styles.wicketKeeperContainer}>
                      <View style={{flexDirection:'column'}}>
                        <Image source={require('../assets/previewDefault.png')} style={{height:'75%',width:'25%'}}/>
                        <Text style={{color:'white',backgroundColor:'black',margin:10}}>M Doss-R</Text>
                      </View>
                        
                    </View> */}
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Preview;

const styles = StyleSheet.create({
  bgImageWrapper: {
    height: '100%',
    alignItems: 'center',
  },
  headerContainer: {
    backgroundColor: 'black',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'semibold',
  },
  playersText: {
    fontSize: 17,
    color: 'gray',
  },
  playerCountText: {
    fontSize: 16,
    color: 'white',
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wicketKeeperContainer: {
    width: '100%',
    height: 100,
    backgroundColor: 'gray',
    flexDirection: 'row',
  },
});
